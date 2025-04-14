// TaskModal.tsx
import { defineComponent, ref, defineEmits } from 'vue';
import { Teleport } from 'vue';

export default defineComponent({
  name: 'TaskModal',
  props: {
    modalVisible: Boolean,
  },
  emits: ['closeModal', 'saveTask'],
  setup(props, { emit }) {
    const newTask = ref({ title: '', description: '' });
    const errorMessage = ref('');

    const closeModal = () => {
      emit('closeModal');
      newTask.value = { title: '', description: '' };  // Reset form
      errorMessage.value = '';
    };

    const saveTask = () => {
      if (newTask.value.title && newTask.value.description) {
        emit('saveTask', newTask.value);
      } else {
        errorMessage.value = 'Title and description are required';
      }
    };

    return () => (
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
                <button type="submit">Save Task</button>
                <button type="button" onClick={closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </Teleport>
    );
  }
});
