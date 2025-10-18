<template>
  <footer class="app-footer">
    <div class="container">
      <p>&copy; {{ currentYear }} VueWork. Built with Vue 3 for Web Applications Course.</p>
      <div class="footer-links">
        <a href="https://github.com/yourusername/vuework" target="_blank" rel="noopener">
          GitHub
        </a>
        <span>•</span>
        <a href="mailto:your.email@example.com">Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem;
  margin-top: auto;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .app-footer {
    padding: 1.5rem 1rem;
  }
}
</style>