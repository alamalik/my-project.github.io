<template>
  <div class="home-view">
    <section class="hero">
      <h1>Welcome to VueWork</h1>
      <p class="subtitle">Streamline your team's workflow with intuitive project management</p>
      <div class="cta-buttons">
        <RouterLink to="/projects" class="btn btn-primary">View Projects</RouterLink>
        <RouterLink to="/calendar" class="btn btn-secondary">See Calendar</RouterLink>
      </div>
    </section>

    <section class="features">
      <h2>Key Features</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="icon">📊</div>
          <h3>Kanban Boards</h3>
          <p>Visualize your workflow with intuitive drag-and-drop task boards</p>
        </div>

        <div class="feature-card">
          <div class="icon">📅</div>
          <h3>Calendar View</h3>
          <p>Track deadlines and milestones with an integrated calendar</p>
        </div>

        <div class="feature-card">
          <div class="icon">👥</div>
          <h3>Team Collaboration</h3>
          <p>Assign tasks, comment, and keep everyone on the same page</p>
        </div>

        <div class="feature-card">
          <div class="icon">📈</div>
          <h3>Analytics</h3>
          <p>Monitor progress and identify bottlenecks with visual insights</p>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stat-item">
        <h3>{{ stats.projects }}</h3>
        <p>Active Projects</p>
      </div>
      <div class="stat-item">
        <h3>{{ stats.tasks }}</h3>
        <p>Tasks Completed</p>
      </div>
      <div class="stat-item">
        <h3>{{ stats.users }}</h3>
        <p>Team Members</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProjectsStore } from '../stores/projects'

const projectsStore = useProjectsStore()

const stats = ref({
  projects: 0,
  tasks: 0,
  users: 5
})
</script>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea22 0%, #764ba222 100%);
  border-radius: 12px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.3rem;
  color: #7f8c8d;
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: white;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-secondary:hover {
  background: #667eea;
  color: white;
}

.features {
  margin-bottom: 3rem;
}

.features h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.feature-card p {
  color: #7f8c8d;
  line-height: 1.6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  border-radius: 12px;
  color: white;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: 1fr;
  }
}
</style>