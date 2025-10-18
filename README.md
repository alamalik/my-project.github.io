# VueWork - Team Tasks & Scheduling App

![CI Status](https://github.com/yourusername/vuework/workflows/CI/badge.svg)

## 📋 Problem Statement

Small teams often struggle with fragmented task management across emails, spreadsheets, and sticky notes. Communication breaks down, deadlines are missed, and there's no clear visibility into project progress. VueWork solves this by providing a centralized, intuitive platform where teams can manage projects, assign tasks, track progress, and collaborate effectively in one place.

## 👥 Target Users

- **Small teams** (3-10 members) in startups or small businesses
- **Student project groups** working on collaborative assignments
- **Freelance teams** coordinating remote work
- **Department teams** in larger organizations needing lightweight project management

## ✅ Success Criteria

- Users can create a new project and add tasks in under 2 minutes
- Team members can move tasks across status columns with a single drag
- 90% of users can navigate the app without external help
- Page load time under 2 seconds on average connections
- Mobile-responsive design works seamlessly on phones and tablets
- Accessibility score of 90+ on Lighthouse audits

## 📖 User Stories

1. **As a team member**, I want to **create a new project** so that **I can organize related tasks together**

2. **As a project manager**, I want to **see all tasks in a Kanban board** so that **I can visualize workflow and progress at a glance**

3. **As a team member**, I want to **add tasks with due dates and assignees** so that **everyone knows who is responsible and when work is due**

4. **As a developer**, I want to **move tasks between To-Do, In-Progress, and Done columns** so that **I can update status quickly**

5. **As a team lead**, I want to **view a calendar with all tasks** so that **I can see upcoming deadlines and plan capacity**

6. **As a user**, I want to **comment on tasks** so that **I can communicate with my team about specific work items**

7. **As a team member**, I want to **search and filter tasks by label, assignee, or status** so that **I can quickly find relevant work**

8. **As an admin**, I want to **manage user accounts and roles** so that **I can control who has access to the system**

9. **As a manager**, I want to **see analytics on task completion trends** so that **I can identify bottlenecks and improve team performance**

10. **As a user**, I want to **archive completed projects** so that **my project list stays clean and focused on active work**

## 🚫 Non-Goals

This project will NOT include:

- Time tracking or hour logging features
- Invoicing or billing capabilities
- Built-in chat or messaging system (use comments instead)
- File storage beyond basic attachments
- Gantt charts or complex project planning tools
- Integration with external tools (Slack, Jira, etc.)
- Mobile native apps (web-responsive only)

## 🛠️ Tech Stack

- **Frontend**: Vue 3 (Composition API)
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **State Management**: Pinia
- **HTTP Client**: Axios
- **Styling**: CSS3 / Tailwind CSS (optional)
- **Code Quality**: ESLint + Prettier
- **Testing**: Vitest (unit) + Cypress (e2e)
- **CI/CD**: GitHub Actions
- **Deployment**: Netlify / Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vuework.git
cd vuework

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier
npm run test:unit    # Run unit tests
npm run test:e2e     # Run end-to-end tests
```

## 📁 Project Structure

```
vuework/
├── src/
│   ├── assets/          # Images, fonts, global styles
│   ├── components/      # Reusable Vue components
│   │   ├── common/      # Buttons, Inputs, Modals
│   │   ├── layout/      # Header, Footer, Sidebar
│   │   └── features/    # Task cards, Project cards
│   ├── views/           # Page components
│   │   ├── HomeView.vue
│   │   ├── ProjectsView.vue
│   │   ├── BoardView.vue
│   │   ├── CalendarView.vue
│   │   └── AdminView.vue
│   ├── stores/          # Pinia state stores
│   │   ├── auth.js
│   │   ├── projects.js
│   │   └── tasks.js
│   ├── router/          # Vue Router configuration
│   │   └── index.js
│   ├── services/        # API service layer
│   │   └── api.js
│   ├── composables/     # Reusable composition functions
│   ├── utils/           # Helper functions
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── public/              # Static assets
├── tests/               # Test files
├── docs/                # Documentation and wireframes
├── .env.example         # Environment variables template
├── .eslintrc.cjs        # ESLint configuration
├── .prettierrc          # Prettier configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design & Wireframes

Low-fidelity wireframes are available in the `/docs/wireframes` folder:

- Home page (Dashboard)
- Projects list
- Kanban board
- Task detail modal
- Calendar view

## 🧪 Testing

Run tests before committing:

```bash
# Unit tests
npm run test:unit

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 🚢 Deployment

The app is automatically deployed on push to the `main` branch via GitHub Actions.

**Live URL**: [https://vuework.netlify.app](https://vuework.netlify.app) (coming soon)

## 👨‍💻 Development Workflow

1. Create a new branch for each feature: `git checkout -b feature/task-board`
2. Make your changes and commit: `git commit -m "Add task board component"`
3. Push and create a pull request: `git push origin feature/task-board`
4. Ensure CI passes before merging
5. Merge to `main` for automatic deployment

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 🤝 Contributing

This is a student project, but suggestions are welcome! Open an issue or submit a pull request.

## 📞 Contact

**Project Team**: [Your Name]  
**Email**: your.email@example.com  
**GitHub**: [@yourusername](https://github.com/yourusername)

---

**Current Milestone**: 1 - Project Pitch & App Skeleton ✅  
**Next Milestone**: 2 - Data Model & API Layer