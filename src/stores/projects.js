import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  // State
  const projects = ref([
    {
      id: 1,
      name: 'Website Redesign',
      description: 'Redesign company website with modern UI/UX',
      status: 'active',
      taskCount: 12,
      memberCount: 4,
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Build cross-platform mobile application',
      status: 'active',
      taskCount: 25,
      memberCount: 6,
      createdAt: '2024-02-01'
    },
    {
      id: 3,
      name: 'Marketing Campaign',
      description: 'Q1 2024 marketing campaign planning and execution',
      status: 'completed',
      taskCount: 8,
      memberCount: 3,
      createdAt: '2024-01-10'
    }
  ])

  const loading = ref(false)
  const error = ref(null)

  // Getters
  const activeProjects = computed(() =>
    projects.value.filter(project => project.status === 'active')
  )

  const completedProjects = computed(() =>
    projects.value.filter(project => project.status === 'completed')
  )

  const totalProjects = computed(() => projects.value.length)

  // Actions
  function addProject(project) {
    const newProject = {
      id: Date.now(),
      ...project,
      taskCount: 0,
      memberCount: 1,
      status: 'active',
      createdAt: new Date().toISOString()
    }
    projects.value.push(newProject)
  }

  function updateProject(id, updates) {
    const index = projects.value.findIndex(p => p.id === id)
    if (index !== -1) {
      projects.value[index] = { ...projects.value[index], ...updates }
    }
  }

  function deleteProject(id) {
    const index = projects.value.findIndex(p => p.id === id)
    if (index !== -1) {
      projects.value.splice(index, 1)
    }
  }

  function getProjectById(id) {
    return projects.value.find(p => p.id === parseInt(id))
  }

  async function fetchProjects() {
    loading.value = true
    error.value = null
    try {
      // API call will be implemented in Milestone 2
      // For now, using mock data
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    // State
    projects,
    loading,
    error,
    // Getters
    activeProjects,
    completedProjects,
    totalProjects,
    // Actions
    addProject,
    updateProject,
    deleteProject,
    getProjectById,
    fetchProjects
  }
})