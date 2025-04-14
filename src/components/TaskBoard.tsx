//TaskBoard.tsx

import { defineComponent, ref, onMounted } from 'vue';
import './TaskBoard.css';
import { TaskState } from '../data/models/task';
import type { Task } from '../data/models/task';
import { Teleport } from 'vue';
import * as taskApi from '../data/apis/taskApi';
import TaskColumn from './TaskColumn';

export default defineComponent({
  name: 'TaskBoard',
  setup() {
    const tasks = ref<Task[]>([]);
    const contextMenuVisible = ref(false);
    const contextMenuPosition = ref({ x: 0, y: 0 });
    const selectedTask = ref<Task | null>(null);
    const modalVisible = ref(false);
    const newTask = ref({ title: '', description: '' });
    const errorMessage = ref('');
    const loadingVisible = ref(false);



    const fetchTasks = async () => {
      loadingVisible.value = true;
      try {
        tasks.value = await taskApi.fetchTasks();
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
      loadingVisible.value = false;
    };

    const getTasksByState = (state: TaskState) => {
      return tasks.value.filter(task => task.state === state);
    };

    const onDragStart = (event: DragEvent, task: Task) => {
      event.dataTransfer?.setData('taskId', String(task.id));
    };

    const onDrop = async (event: DragEvent, targetState: TaskState) => {
      const taskId = event.dataTransfer?.getData('taskId');
      const task = tasks.value.find((task: Task) => String(task.id) === taskId);

      if (task) {
        loadingVisible.value = true;
        try {
          const updatedTask = await taskApi.updateTaskState(task.id, targetState);

          task.state = updatedTask.state;
          event.preventDefault();
        } catch (error) {
          console.error('Error updating task state:', error);
        }
        loadingVisible.value = false;
      }
    };

    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
    };


    const onRightClick = (event: MouseEvent, task: Task) => {
      event.preventDefault();
      event.stopPropagation();
      console.log(`Right-clicked on task: ${task.title}`);

      selectedTask.value = task;
      contextMenuPosition.value = { x: event.clientX, y: event.clientY };
      contextMenuVisible.value = true;
    };

    const changeTaskState = async (state: TaskState) => {
      if (selectedTask.value) {
        loadingVisible.value = true;
        try {
          selectedTask.value = await taskApi.updateTaskState(selectedTask.value.id, state);
        } catch (error) {
          console.error('Error changing task state:', error);
        }
        window.location.reload();

      }
    };


    const closeContextMenu = () => {
      contextMenuVisible.value = false;
    };

    const showModal = () => {
      modalVisible.value = true;
    };

    const closeModal = () => {
      modalVisible.value = false;
      newTask.value = { title: '', description: '' };  // Reset the form
      errorMessage.value = '';  // Reset error message
    };

    const deleteTask = async (taskId: number) => {
      loadingVisible.value = true;

      try {
        await taskApi.deleteTask(taskId);
        tasks.value = tasks.value.filter(task => task.id !== taskId);
      } catch (error) {
        console.error('Error deleting task:', error);
      }
      loadingVisible.value = false;

    };


    const saveTask = async () => {
      if (newTask.value.title && newTask.value.description) {
        try {
          const task = await taskApi.createTask(newTask.value.title, newTask.value.description);
          tasks.value.push(task);
          closeModal();
        } catch (error) {
          errorMessage.value = 'Failed to create task';
          console.error('Error saving task:', error);
        }
      }
    };

    onMounted(() => {
      fetchTasks();
      document.addEventListener('click', closeContextMenu);
    });

    return () => (
      <div class="task-board">
        {loadingVisible.value && (
          <div class="overlay">
            <div class="spinner"></div>
          </div>
        )}
        <button class="add-task-btn" onClick={showModal}>
         +
        </button>

        <h2>Workshop Task Board</h2>
        <div class="board-columns">
          <TaskColumn
            state={TaskState.PENDING}
            tasks={getTasksByState(TaskState.PENDING)}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onContextMenu={onRightClick}
          />
          <TaskColumn
            state={TaskState.IN_PROGRESS}
            tasks={getTasksByState(TaskState.IN_PROGRESS)}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onContextMenu={onRightClick}
          />
          <TaskColumn
            state={TaskState.DONE}
            tasks={getTasksByState(TaskState.DONE)}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onDragStart={onDragStart}
            onContextMenu={onRightClick}
          />
        </div>
        {contextMenuVisible.value && selectedTask.value && (
          <div class="context-menu" style={{ top: `${contextMenuPosition.value.y}px`, left: `${contextMenuPosition.value.x}px` }}>

            <>
              <button onClick={() => changeTaskState(TaskState.PENDING)}>Move to To Do</button>
              <button onClick={() => changeTaskState(TaskState.IN_PROGRESS)}>Move to In Progress</button>
              <button onClick={() => changeTaskState(TaskState.DONE)}>Move to Done</button>
              <button
                class="delete-button"
                onClick={() => {
                  if (selectedTask.value) {
                    deleteTask(selectedTask.value.id);
                    contextMenuVisible.value = false;
                  }
                }}
              ><p>Delete Task</p>

              </button>
            </>

          </div>
        )}
        {modalVisible.value && (
          <Teleport to="body">
            <div class="modal-overlay" onClick={closeModal}>
              <div class="modal-content" onClick={(e) => e.stopPropagation()}>
                <h3>Create New Task</h3>
                <form onSubmit={(e) => { e.preventDefault(); saveTask(); }}>
                  <label>
                    Title:
                    <input type="text" v-model={newTask.value.title} required />
                  </label>
                  <label>
                    Description:
                    <textarea v-model={newTask.value.description} required />
                  </label>
                  {errorMessage.value && <p class="error-message">{errorMessage.value}</p>}
                  <div class="modal-buttons">
                    <button type="submit" class="save-button">Save Task</button>
                    <button type="button" onClick={closeModal} class="cancel-button">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </Teleport>
        )}
      </div>
    );
  }
});
