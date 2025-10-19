<template>
  <div class="calendar-view">
    <h1>Calendar</h1>
    <div class="calendar-placeholder">
      <div class="icon">📅</div>
      <h2>Calendar View</h2>
      <p>Interactive calendar with task scheduling coming in future milestones</p>
      <div class="feature-list">
        <div class="feature-item">✓ View all tasks by date</div>
        <div class="feature-item">✓ Drag & drop to reschedule</div>
        <div class="feature-item">✓ Filter by project or assignee</div>
        <div class="feature-item">✓ Monthly and weekly views</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Calendar implementation will be added in later milestones
</script>

<style scoped>
.calendar-view {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.calendar-placeholder {
  background: white;
  padding: 4rem 2rem;
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
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.feature-item {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  color: #2c3e50;
  font-weight: 500;
}

@media (max-width: 768px) {
  .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>
