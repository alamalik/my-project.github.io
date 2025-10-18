<template>
  <div class="board-view">
    <div class="board-header">
      <div>
        <h1>{{ project.name }}</h1>
        <p class="project-description">{{ project.description }}</p>
      </div>
      <button class="btn btn-primary">+ Add Task</button>
    </div>

    <div class="kanban-board">
      <div class="kanban-column">
        <div class="column-header todo">
          <h3>📋 To Do</h3>
          <span class="task-count">0</span>
        </div>
        <div class="task-list">
          <p class="empty-message">No tasks yet</p>
        </div>
      </div>

      <div class="kanban-column">
        <div class="column-header in-progress">
          <h3>⚡ In Progress</h3>
          <span class="task-count">0</span>
        </div>
        <div class="task-list">
          <p class="empty-message">No tasks in progress</p>
        </div>
      </div>

      <div class="kanban-column">
        <div class="column-header done">
          <h3>✅ Done</h3>
          <span class="task-count">0</span>
        </div>
        <div class="task-list">
          <p class="empty-message">No completed tasks</p>
        </div>
      </div>
    </div>

    <div class="info-message">
      <strong>Note:</strong> Kanban board functionality with drag & drop will be implemented in Milestone 3
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const project = ref({
  id: route.params.id,
  name: 'Sample Project',
  description: 'This is a placeholder project board'
})
</script>

<style scoped>
.board-view {
  max-width: 1400px;
  margin: 0 auto;
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

.column-header.todo {
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
  padding: 1rem;
}

.empty-message {
  text-align: center;
  color: #95a5a6;
  padding: 2rem;
  font-style: italic;
}

.info-message {
  background: #fff3cd;
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 8px;
  color: #856404;
  text-align: center;
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
}
</style>