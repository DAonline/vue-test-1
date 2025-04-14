// TaskColumn.tsx
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import { TaskState } from '../data/models/task';
import type { Task } from '../data/models/task';

import TaskCard from './TaskCard';


interface TaskColumnProps {
  state: TaskState;
  tasks: Task[];
  onDragOver: (event: DragEvent) => void;
  onDrop: (event: DragEvent, targetState: TaskState) => void;
  onDragStart: (event: DragEvent, task: Task) => void;
  onContextMenu: (event: MouseEvent, task: Task) => void;  
}

export default defineComponent({
  name: 'TaskColumn',
  props: {
    state: {
      type: String as PropType<TaskState>,
      required: true,
    },
    tasks: {
      type: Array as PropType<Task[]>,
      required: true,
    },
    onDragOver: {
      type: Function,
      required: true,
    },
    onDrop: {
      type: Function,
      required: true,
    },
    onDragStart: {
      type: Function,
      required: true,
    },
    onContextMenu: {
      type: Function,
      required: true,  
    },
  },
  setup(props: TaskColumnProps) {
    return () => (
      <div
        class="column"
        onDragover={props.onDragOver}
        onDrop={(event) => props.onDrop(event, props.state)}
      >
        <h3>{TaskState[props.state]}</h3>
        <div class="task-list">
          {props.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDragStart={props.onDragStart}
              onContextMenu={props.onContextMenu}  
            />
          ))}
        </div>
      </div>
    );
  }
});