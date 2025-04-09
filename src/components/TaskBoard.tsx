import { defineComponent, ref } from 'vue'
import './TaskBoard.css'

enum TaskState {
  TODO = 'todo',
  IN_PROGRESS = 'in-progress',
  DONE = 'done'
}

interface Task {
  id: number
  title: string
  description: string
  state: TaskState
  createdAt: Date
}

export default defineComponent({
  name: 'TaskBoard',
  setup() {
    const tasks = ref<Task[]>([
      {
        id: 1,
        title: 'Setup Project',
        description: 'Initialize Vue project with TypeScript and TSX',
        state: TaskState.DONE,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 2,
        title: 'Reusable Components',
        description: 'Build reusable task components for the task board',
        state: TaskState.IN_PROGRESS,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 3,
        title: 'Styling',
        description: 'Implement CSS styles for the task board, to cover page for all screen sizes',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 4,
        title: 'Composition API',
        description: 'Export task functionality to composition api and reuse it in task board.',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 5,
        title: 'Drag and Drop',
        description: 'Implement drag and drop functionality for tasks',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 6,
        title: 'Context Menu',
        description: 'Add context menu for tasks to select state. The task should \
         be moved to the selected state automatically.',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 7,
        title: 'Implement Teleported Modal for New Task',
        description: 'Use Vue Teleport to render a modal outside the main task board component. ' +
                     'The modal should allow users to enter task details and save the task to the "To Do" state. ' +
                     'Ensure it closes when users click outside or choose to cancel.',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 8,
        title: 'Validation',
        description: 'Make sure empty tasks cannot be added to the task board.',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      },
      {
        id: 9,
        title: 'Testing',
        description: 'Add unit test, to ensure adding empy task is not possible, but adding task with data is possible.',
        state: TaskState.TODO,
        createdAt: new Date('2024-04-08')
      }
    ])

    const getTasksByState = (state: Task['state']) => {
      return tasks.value.filter(task => task.state === state)
    }
//asasslfh
    return () => (
      <div class="task-board">
        <h2>Workshop Task Board</h2>
        <div class="board-columns">
          <div class="column">
            <h3>To Do</h3>
            <div class="task-list">
              {getTasksByState(TaskState.TODO).map(task => (
                <div key={task.id} class="task-card">
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                  <span class="date">{task.createdAt.toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="column">
            <h3>In Progress</h3>
            <div class="task-list">
              {getTasksByState(TaskState.IN_PROGRESS).map(task => (
                <div key={task.id} class="task-card">
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                  <span class="date">{task.createdAt.toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="column">
            <h3>Done</h3>
            <div class="task-list">
              {getTasksByState(TaskState.DONE).map(task => (
                <div key={task.id} class="task-card">
                  <h4>{task.title}</h4>
                  <p>{task.description}</p>
                  <span class="date">{task.createdAt.toLocaleDateString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
