<div align="center">

# ✨ Task Manager – Vanilla JavaScript Frontend

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A sleek and modern task management frontend built with **pure HTML, CSS, and JavaScript** that consumes a **REST API** backend.

[Features](#-features) • [Demo](#-demo) • [Getting Started](#-getting-started) • [API](#-api-endpoints) • [Tech Stack](#-tech-stack)

</div>

---

## 🎯 Features

✅ **CRUD Operations**
- Create, read, update, and delete tasks seamlessly
- Toggle task completion status with a single click

🔍 **Smart Search**
- Search tasks by title keywords
- Search tasks by specific dates

🎨 **Modern UI**
- Clean and responsive design
- Smooth animations and transitions
- Visual feedback for user actions

⚡ **Pure Vanilla JS**
- No frameworks or libraries
- Async/await for API calls
- Modern DOM manipulation

---

## 🖥️ Demo

> **Note:** Make sure the backend API is running on `http://localhost:8080/api/tasks` before testing the frontend.

![Task Manager Preview](/images/screenshot.jpg)

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Backend REST API running on `http://localhost:8080/api/tasks`

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/Angel0zzx/frontend-task-manager-api.git
   cd frontend-task-manager-api
```

2. **Launch the application**
   - Option 1: Open `index.html` directly in your browser
   - Option 2: Use Live Server in VS Code for hot reload
   

3. **Start using the app!** 🎉

---

## 📡 API Endpoints

The frontend communicates with the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/{id}/status` | Toggle task completion |
| `DELETE` | `/api/tasks/{id}/delete` | Delete a task |
| `GET` | `/api/tasks/search?keyword=` | Search by title |
| `GET` | `/api/tasks/search/date?date=` | Search by date |

**Base URL:** `http://localhost:8080/api/tasks`

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="33%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" width="50" height="50" />
<br><strong>HTML5</strong>
<br>Semantic markup
</td>
<td align="center" width="33%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" width="50" height="50" />
<br><strong>CSS3</strong>
<br>Modern styling & animations
</td>
<td align="center" width="33%">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" width="50" height="50" />
<br><strong>JavaScript (ES6+)</strong>
<br>Async/await & Fetch API
</td>
</tr>
</table>

---

## 📂 Project Structure
```
frontend/
│
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Styling and animations
└── js/
    └── main.js         # Core JavaScript logic
```

> **Design Philosophy:** Simple structure for easy understanding and maintainability. Perfect for learning and educational purposes.

---

## 🎓 Learning Outcomes

This project was built to practice and master:

- **REST API Consumption** – Handling HTTP requests with Fetch API
- **Asynchronous JavaScript** – Using async/await patterns
- **DOM Manipulation** – Dynamic UI updates without frameworks
- **Project Organization** – Clean code structure and separation of concerns
- **Error Handling** – Graceful error management and user feedback

---

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement drag-and-drop reordering
- [ ] Add dark mode toggle
- [ ] Local storage fallback
- [ ] Task priority levels
- [ ] Export tasks to JSON/CSV

---

## 👨‍💻 Author

**Angel0zzx**

Learning project to strengthen frontend development skills.

---

<div align="center">

**If you found this helpful, give it a ⭐!**

</div>