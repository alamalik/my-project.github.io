import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  // State - START WITH EMPTY ARRAY (no sample tasks)
  const tasks = ref([])
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const allTasks = computed(() => tasks.value)

  const tasksByStatus = computed(() => ({
    'to-do': tasks.value.filter(t => t.status === 'to-do'),
    'in-progress': tasks.value.filter(t => t.status === 'in-progress'),
    done: tasks.value.filter(t => t.status === 'done'),
  }))

  const tasksByProject = projectId => {
    return tasks.value.filter(t => t.projectId === parseInt(projectId))
  }

  const totalTasks = computed(() => tasks.value.length)

  const completedTasks = computed(() => tasks.value.filter(t => t.status === 'done').length)

  // Actions
  function addTask(task) {
    const newTask = {
      id: Date.now(),
      projectId: task.projectId,
      title: task.title,
      description: task.description || '',
      status: 'to-do', // Always start in To Do
      priority: task.priority || 'medium',
      assignedTo: task.assignedTo || null,
      dueDate: task.dueDate || null,
      labels: task.labels || [],
      comments: [],
      createdAt: new Date().toISOString(),
    }
    tasks.value.push(newTask)
    return newTask
  }

  function updateTask(id, updates) {
    const index = tasks.value.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates }
    }
  }

  function moveTask(id, newStatus) {
    const validStatuses = ['to-do', 'in-progress', 'done']
    if (validStatuses.includes(newStatus)) {
      updateTask(id, { status: newStatus })
    }
  }

  function deleteTask(id) {
    const index = tasks.value.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks.value.splice(index, 1)
    }
  }

  function getTaskById(id) {
    return tasks.value.find(t => t.id === parseInt(id))
  }

  function addComment(taskId, comment) {
    const task = getTaskById(taskId)
    if (task) {
      task.comments.push({
        id: Date.now(),
        text: comment,
        createdAt: new Date().toISOString(),
        author: 'Current User',
      })
    }
  }

  async function fetchTasks() {
    loading.value = true
    error.value = null
    try {
      // API call will be implemented in Milestone 2
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    tasks,
    loading,
    error,
    // Getters
    allTasks,
    tasksByStatus,
    tasksByProject,
    totalTasks,
    completedTasks,
    // Actions
    addTask,
    updateTask,
    moveTask,
    deleteTask,
    getTaskById,
    addComment,
    fetchTasks,
  }
})
