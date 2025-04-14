// TaskCard.tsx

import { defineComponent } from 'vue';
import type{ Task } from '../data/models/task';

interface TaskCardProps {
  task: Task;
  onDragStart: (event: DragEvent, task: Task) => void;
  onContextMenu: (event: MouseEvent, task: Task) => void;
}

export default defineComponent({
  name: 'TaskCard',
  props: {
    task: Object as () => Task,
    onDragStart: Function,
    onContextMenu: Function
  },
  setup(props: TaskCardProps) {
    return () => (
      <div
        class="task-card"
        draggable="true"
        onDragstart={(event) => props.onDragStart(event, props.task)}
        onContextmenu={(event) => props.onContextMenu(event, props.task)}
      >
        <h4>{props.task.title}</h4>
        <p>{props.task.description}</p>
        <span class="date">{new Date(props.task.createdAt).toLocaleDateString()}</span>
      </div>
    );
  }
});
