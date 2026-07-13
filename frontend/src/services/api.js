import axios from "axios";

const api = axios.create({
  baseURL: "https://studyai-smart-study-companion-backend.onrender.com/api",
});

// Upload PDF/DOCX
export const uploadMaterial = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post("/upload-material", formData);
};

// Summary
export const generateSummary = (text) => {
  return api.post("/generate-summary", {
    text,
  });
};

// Flashcards
export const generateFlashcards = (text) => {
  return api.post("/generate-flashcards", {
    text,
  });
};

// Study Schedule
export const generateSchedule = (text) => {
  return api.post("/generate-schedule", {
    text,
  });
};

// Quiz
export const generateQuiz = (text) => {
  return api.post("/generate-quiz", {
    text,
  });
};

export default api;