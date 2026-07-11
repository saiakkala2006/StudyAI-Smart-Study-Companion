# 📚 StudyAI – AI Powered Study Companion

StudyAI is an AI-powered web application that helps students study smarter by generating summaries, flashcards, and personalized study schedules from uploaded study material.

## 🚀 Live Demo

🌐 Frontend: https://study-ai-smart-study-companion.vercel.app/

⚙️ Backend: https://studyai-smart-study-companion-backend.onrender.com

---

## ✨ Features

- 📄 Upload PDF and DOCX study materials
- 📝 AI-generated concise summaries
- 🃏 Automatic flashcard generation
- 📅 Personalized study schedule creation
- 🤖 Powered by Groq Llama 3.3 70B
- 🌐 Fully responsive web interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios

### Backend
- Flask
- Python
- Flask-CORS
- Gunicorn

### AI
- Groq API
- Llama 3.3 70B Versatile

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
study-ai/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/study-ai.git
cd study-ai
```

---

### Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend runs on

```
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## 📸 Screenshots

### Home Page

![Home](screenshots/home.png)

---

### AI Summary

![Summary](screenshots/summary.png)

---

### Flashcards

![Flashcards](screenshots/flashcards.png)

---

## 🎯 Future Improvements

- 🧠 AI Quiz Generation
- 📈 Progress Tracking
- 🔐 User Authentication
- ☁️ Cloud Storage
- 📱 Mobile Responsive Improvements
- 🌙 Dark / Light Theme

---

## 👨‍💻 Author

**Akkala Sai Narayana**

B.Tech CSE (Data Science)

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
