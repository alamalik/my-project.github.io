<template>
  <div class="board-view">
    <div class="board-header">
      <div>
        <h1>{{ project.name }}</h1>
        <p class="project-description">{{ project.description }}</p>
      </div>
      <button class="btn btn-primary" @click="openAddTaskModal">+ Add Task</button>
    </div>

    <div class="kanban-board">
      <div class="kanban-column" v-for="status in ['to-do', 'in-progress', 'done']" :key="status">
        <div :class="['column-header', status]">
          <h3>{{ getStatusIcon(status) }} {{ getStatusLabel(status) }}</h3>
          <span class="task-count">{{ getTasksByStatus(status).length }}</span>
        </div>
        <div class="task-list">
          <div v-if="getTasksByStatus(status).length === 0" class="empty-message">
            {{ getEmptyMessage(status) }}
          </div>
          <div v-for="task in getTasksByStatus(status)" :key="task.id" class="task-card">
            <div class="task-header">
              <h4>{{ task.title }}</h4>
              <span :class="['priority', task.priority]">{{ task.priority }}</span>
            </div>
            <p class="task-description">{{ task.description }}</p>
            <div class="task-footer">
              <span class="due-date" v-if="task.dueDate">📅 {{ task.dueDate }}</span>
              <span class="assigned-to" v-if="task.assignedTo">👤 User #{{ task.assignedTo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Task Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeAddTaskModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          10
          <h2>Add New Task</h2>
          <button class="close-btn" @click="closeAddTaskModal">✕</button>
        </div>

        <form @submit.prevent="submitTask" class="modal-form">
          <div class="form-group">
            <label for="title">Task Title</label>
            <input
              id="title"
              v-model="newTask.title"
              type="text"
              placeholder="Enter task title"
              required
            />
          </div>

          <div class="form-group">
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="newTask.description"
              placeholder="Enter task description"
              rows="3"
            ></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="priority">Priority</label>
              <select id="priority" v-model="newTask.priority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div class="form-group">
              <label for="dueDate">Due Date</label>
              <input id="dueDate" v-model="newTask.dueDate" type="date" />
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-secondary" @click="closeAddTaskModal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Task</button>
          </div>
        </form>
      </div>
    </div>

    <div class="info-message">
      <strong>Note:</strong> Drag & drop will be implemented in Milestone 3
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'
import { useProjectsStore } from '../stores/projects'

const route = useRoute()
const router = useRouter()
const tasksStore = useTasksStore()
const projectsStore = useProjectsStore()

const showModal = ref(false)
const newTask = ref({
  title: '',
  description: '',
  priority: 'medium',
  dueDate: '',
})

// Get current project
const project = computed(() => {
  const proj = projectsStore.getProjectById(route.params.id)
  return proj || { id: route.params.id, name: 'Project Not Found', description: '' }
})

// Get tasks for this project
const projectTasks = computed(() => tasksStore.tasksByProject(parseInt(route.params.id)))

// Methods
function getTasksByStatus(status) {
  return projectTasks.value.filter(task => task.status === status)
}

function getStatusLabel(status) {
  const labels = {
    'to-do': 'To Do',
    'in-progress': 'In Progress',
    done: 'Done',
  }
  return labels[status]
}

function getStatusIcon(status) {
  const icons = {
    'to-do': '📋',
    'in-progress': '⚡',
    done: '✅',
  }
  return icons[status]
}

function getEmptyMessage(status) {
  const messages = {
    'to-do': 'No tasks yet',
    'in-progress': 'No tasks in progress',
    done: 'No completed tasks',
  }
  return messages[status]
}

function openAddTaskModal() {
  showModal.value = true
}

function closeAddTaskModal() {
  showModal.value = false
  newTask.value = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
  }
}

function submitTask() {
  if (!newTask.value.title.trim()) {
    alert('Please enter a task title')
    return
  }

  tasksStore.addTask({
    projectId: parseInt(route.params.id),
    title: newTask.value.title,
    description: newTask.value.description,
    status: 'to-do',
    priority: newTask.value.priority,
    assignedTo: 1,
    dueDate: newTask.value.dueDate,
    labels: [],
  })

  // Increment project task count
  projectsStore.incrementTaskCount(parseInt(route.params.id))

  closeAddTaskModal()
}

// Move task between columns
function moveTaskToStatus(taskId, newStatus) {
  tasksStore.moveTask(taskId, newStatus)
}

// Delete task
function deleteTask(taskId, event) {
  event.stopPropagation()
  if (confirm('Are you sure you want to delete this task?')) {
    tasksStore.deleteTask(taskId)
    projectsStore.decrementTaskCount(parseInt(route.params.id))
  }
}

// Check if project exists on mount
onMounted(() => {
  if (!projectsStore.getProjectById(route.params.id)) {
    console.warn('Project not found, redirecting...')
    // Optionally redirect to projects page
    // router.push({ name: 'projects' })
  }
})
</script>
<style scoped>
.board-view {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.board-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #e0e0e0;
  color: #333;
}

.btn-secondary:hover {
  background: #d0d0d0;
}

.kanban-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.kanban-column {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1rem;
  min-height: 500px;
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.column-header h3 {
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.task-count {
  background: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.column-header.to-do {
  background: #e3f2fd;
  color: #1976d2;
}

.column-header.in-progress {
  background: #fff3e0;
  color: #f57c00;
}

.column-header.done {
  background: #e8f5e9;
  color: #388e3c;
}

.task-list {
  min-height: 400px;
  padding: 0.5rem;
}

.empty-message {
  text-align: center;
  color: #95a5a6;
  padding: 2rem;
  font-style: italic;
}

.task-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  border-left: 4px solid #667eea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: move;
  transition: all 0.2s ease;
}

.task-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.task-header h4 {
  margin: 0;
  font-size: 1rem;
  color: #2c3e50;
}

.priority {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-transform: capitalize;
}

.priority.low {
  background: #c8e6c9;
  color: #2e7d32;
}

.priority.medium {
  background: #fff9c4;
  color: #f57f17;
}

.priority.high {
  background: #ffccbc;
  color: #d84315;
}

.task-description {
  color: #555;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}

.task-footer {
  display: flex;
  gap: 1rem;
  font-size: 0.85rem;
  color: #7f8c8d;
}

.due-date,
.assigned-to {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.info-message {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 8px;
  color: #856404;
  text-align: center;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.modal-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;
}

.close-btn:hover {
  color: #2c3e50;
}

.modal-form {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.form-actions button {
  flex: 1;
}

@media (max-width: 1024px) {
  .kanban-board {
    grid-template-columns: 1fr;
  }

  .kanban-column {
    min-height: auto;
  }

  .board-header {
    flex-direction: column;
    gap: 1rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
  .task-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e0e0e0;
  }

  .btn-move,
  .btn-delete-task {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    transition: all 0.2s;
  }

  .btn-move:hover {
    background: #f0f0f0;
    transform: scale(1.1);
  }

  .btn-delete-task:hover {
    background: #ffebee;
    transform: scale(1.1);
  }
}
</style>
