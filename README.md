---

# 🏋️ Workout CRUD App (MERN Stack)

A full-stack **Workout Management Application** built using the **MERN Stack** that allows users to create, read, update, and delete workout records. This project demonstrates complete CRUD functionality with a clean UI and RESTful API integration.

---

## 🚀 Features

* ➕ Add new workouts (title, load, reps)
* 📋 View all workouts in real time
* ✏️ Update existing workout details
* 🗑️ Delete workouts
* 🔄 REST API integration
* ⚡ Fast and responsive UI
* 🧠 Scalable backend architecture

---

## 🛠️ Tech Stack

**Frontend**

* React.js
* CSS
* Fetch API

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📁 Project Structure

```
workouts-crud-app/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── App.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/workouts-crud-app.git
cd workouts-crud-app
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and add:

```
MONGO_URI=your_mongodb_connection_string
PORT=4000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🌐 API Endpoints

| Method | Endpoint          | Description          |
| ------ | ----------------- | -------------------- |
| GET    | /api/workouts     | Get all workouts     |
| POST   | /api/workouts     | Create a new workout |
| PUT    | /api/workouts/:id | Update a workout     |
| DELETE | /api/workouts/:id | Delete a workout     |

---

## 🎯 Learning Outcomes

* Understanding MERN stack architecture
* Building RESTful APIs
* Connecting React frontend with Node & MongoDB
* Managing state and side effects in React
* CRUD operations with Mongoose

---

## 📌 Future Improvements

* User authentication (JWT)
* Workout categories
* Pagination & search
* Form validation
* Deployment (Render / Vercel)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repository and submit a pull request.

---

## ⭐ Support

If you like this project, don’t forget to **star ⭐ the repository**!

---
