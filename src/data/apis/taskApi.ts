// taskApi.ts

const API_BASE_URL = 'https://slots.tecrek.com/public/api/tasks';

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks');
    }
    const data = await response.json();
    return data.map((task: any) => ({
      ...task,
      createdAt: new Date(task.created_at),
    }));
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

// Update task state (move task to a different state like "In Progress", "Done", etc.)
export const updateTaskState = async (taskId: number, state: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ state}),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update task state');
    }
    const updatedTask = await response.json();
    return updatedTask;
  } catch (error) {
    console.error('Error updating task state:', error);
    throw error;
  }
};

// Create a new task
export const createTask = async (title: string, description: string) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, state: 'PENDING' }),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create task');
    }
    const newTask = await response.json();
    newTask.createdAt = new Date(newTask.created_at);
    return newTask;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (taskId: number) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to delete task');
    }
    return taskId;
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
