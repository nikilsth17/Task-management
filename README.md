> 👋 Hello Recruiters!

Thank you for checking out my project! This **Task Management API** is part of a backend development challenge where I’ve implemented RESTful APIs using **Node.js**, **Express**, and **MongoDB**.  

It showcases:
- Clean code structure and best practices
- Data validation using Joi
- API features like filtering, pagination, sorting
- Modular and scalable project architecture

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
- **bcrypt** (hashing password securely)
- **env-cmd** (display your current environment or run a specified command in a changed environment)
---

## 📦 API Features

### Core Endpoints

| Method | Endpoint                  | Description                              |
|--------|---------------------------|------------------------------------------|
| POST   | `/api/user/register`      | Create a new user                        |
| POST   | `/api/user/login`         | Login a user                             |
| POST   | `/api/tasks`              | Create a new task                        |
| GET    | `/api/tasks`              | Retrieve all tasks with pagination, sorting, and filtering |
| GET    | `/api/tasks/:id`          | Retrieve a specific task by ID           |
| PUT    | `/api/tasks/:id`          | Update a task (title, description, status) |
| DELETE | `/api/tasks/:id`          | Delete a task by ID                      |
| PATCH  | `/api/tasks/:id/status`   | Update only the task status              |

---
## 📄  Schema
```js
🧑 User schema
{
  firstName: String,
  lastName:String,
  email: String, // required, unique
  password: String // hashed
  gender:String, // enum: ["male", "female", "other"]
  location:String
}

📄 Task Schema
{
  title: String,
  description: String, // required
  status: String, // enum: ["pending", "in-progress", "completed"]
  createdAt: Date
}
```

---

## ⚙️ Installation & Setup



```bash
### 1. Clone the Repository
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api

### 2. Npm install
npm install

### 3. Development mode
npm start

```
Feel free to explore the code, try out the endpoints, and see how I've structured everything.  
If you have any questions or would like to discuss opportunities, I'd love to connect!

📩 **Email:** nikillawo7@gmail.com  


Thanks again for visiting!