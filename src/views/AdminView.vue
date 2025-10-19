<template>
  <div class="admin-view">
    <h1>Admin Dashboard</h1>

    <div class="admin-placeholder">
      <div class="icon">⚙️</div>
      <h2>Admin Panel</h2>
      <p>User management and role-based access control will be implemented in Milestone 4</p>

      <div class="feature-cards">
        <div class="feature-card">
          <h3>👥 User Management</h3>
          <p>Add, edit, and remove team members</p>
        </div>
        <div class="feature-card">
          <h3>🔐 Role Assignment</h3>
          <p>Assign admin or member roles</p>
        </div>
        <div class="feature-card">
          <h3>📊 System Stats</h3>
          <p>View platform usage analytics</p>
        </div>
        <div class="feature-card">
          <h3>🗂️ Project Archive</h3>
          <p>Archive and restore projects</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Admin functionality will be added in Milestone 4
</script>

<style scoped>
.admin-view {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.admin-placeholder {
  background: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.icon {
  font-size: 5rem;
  margin-bottom: 1rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature-card {
  background: linear-gradient(135deg, #667eea22 0%, #764ba222 100%);
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.feature-card p {
  color: #7f8c8d;
  margin-bottom: 0;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .feature-cards {
    grid-template-columns: 1fr;
  }
}
</style>
