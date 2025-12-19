# TaskMint - Full Stack Productivity App

## Stack

- **Frontend:** React + Tailwind CSS
- **Backend:** Express.js
- **Storage:** File system (JSON)
- **Extras:** Framer Motion for animations, React Icons, LocalStorage (optional for user data)

---

## ✅ Features Implemented

### Frontend

- Dynamic dashboard with overview cards (Completed, Pending, High Priority, Due Today)
- Add, edit, and delete tasks via modal forms
- Task filtering and sorting by priority, due date, and completion status
- Responsive UI with Tailwind CSS
- Smooth animations using Framer Motion
- User login/profile simulation stored in localStorage

### Backend

- RESTful API endpoints to manage tasks:
  - `GET /api/tasks` → fetch all tasks
  - `POST /api/tasks` → add new task
  - `PUT /api/tasks/:id` → update task
  - `DELETE /api/tasks/:id` → delete task
- JSON file storage for persistence
- CORS enabled for frontend-backend communication

---

## 🗂 Project Structure

taskmint-app/
├─ backend/
│ ├─ data/
│ │ └─ tasks.json # stores tasks
│ ├─ index.js # Express server
├─ frontend/
│ ├─ src/
│ │ ├─ components/
│ │ │ ├─ AddTaskModal.jsx
│ │ │ └─ TasksList.jsx
│ │ ├─ context/
│ │ │ └─ AppContext.jsx
│ │ └─ App.jsx
│ ├─ tailwind.config.js
├─ package.json
└─ README.md

---

## 👨‍💻 Developer

#### Palden Dorje Titung
