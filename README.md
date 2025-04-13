# 📋 Task Management API

A RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing tasks. This project is designed to demonstrate proficiency in creating scalable backend applications with best practices, including input validation, pagination, sorting, and filtering.

---

## 🚀 Project Goal

Build a robust Task Management API to perform CRUD operations and provide enhanced features like filtering, pagination, and status-specific updates.

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Joi** (for input validation)
- **nodemon** (for development)

---

## 📦 API Features

### Core Endpoints

| Method | Endpoint                  | Description                              |
|--------|---------------------------|------------------------------------------|
| POST   | `/api/tasks`              | Create a new task                        |
| GET    | `/api/tasks`              | Retrieve all tasks with pagination, sorting, and filtering |
| GET    | `/api/tasks/:id`          | Retrieve a specific task by ID           |
| PUT    | `/api/tasks/:id`          | Update a task (title, description, status) |
| DELETE | `/api/tasks/:id`          | Delete a task by ID                      |
| PATCH  | `/api/tasks/:id/status`   | Update only the task status              |

---

## 📄 Task Schema

```js
{
  title: String,
  description: String, // required
  status: String, // enum: ["pending", "in-progress", "completed"]
  createdAt: Date
}


---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api

npm install

# Development mode
npm run dev

# Production mode
npm start
