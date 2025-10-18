import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([
    {
      id: 1,
      projectId: 1,
      title: 'Design homepage mockups',
      description: 'Create high-fidelity mockups for homepage',
      status: 'in-progress',
      priority: 'high',
      assignedTo: 1,
      dueDate: '2025-02-10',
      labels: ['design', 'ui'],
      comments: [],
      createdAt: '2025-01-10'
    },
    {
      id: 2,
      projectId: 1,
      title: 'Setup database schema',
      description: 'Configure PostgreSQL and create tables',
      status: 'to-do',
      priority: 'high',
      assignedTo: 2,
      dueDate: '2025-02-05',
      labels: ['backend', 'database'],
      comments: [],
      createdAt: '2025-01-10'
    },
    {
      id: 3,
      projectId: 1,
      title: 'Write API documentation',
      description: 'Document all REST endpoints',
      status: 'done',
      priority: 'medium',
      assignedTo: 3,
      dueDate: '2025-01-25',
      labels: ['documentation'],
      comments: [],
      createdAt: '2025-01-05'
    },
    {
      id: 4,
      projectId: 2,
      title: 'Setup React Native project',
      description: 'Initialize React Native project structure',
      status: 'to-do',
      priority: 'high',
      assignedTo: 1,
      dueDate: '2025-02-15',
      labels: ['mobile', 'setup'],
      comments: [],
      createdAt: '2025-01-15'
    }
  ])

  const loading = ref(false)
  const error = ref(null)

  // Getters
  const allTasks = computed(() => tasks.value)

  const tasksByStatus = computed(() => ({
    'to-do': tasks.value.filter(t => t.status === 'to-do'),
    'in-progress': tasks.value.filter(t => t.status === 'in-progress'),
    'done': tasks.value.filter(t => t.status === 'done')
  }))

  const tasksByProject = (projectId) => {
    return tasks.value.filter(t => t.projectId === projectId)
  }

  const totalTasks = computed(() => tasks.value.length)

  const completedTasks = computed(() =>
    tasks.value.filter(t => t.status === 'done').length
  )

  // Actions
  function addTask(task) {
    const newTask = {
      id: Math.max(...tasks.value.map(t => t.id), 0) + 1,
      ...task,
      comments: [],
      createdAt: new Date().toISOString()
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
    updateTask(id, { status: newStatus })
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
        id: Math.random(),
        text: comment,
        createdAt: new Date().toISOString(),
        author: 'Current User'
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
    fetchTasks
  }
})