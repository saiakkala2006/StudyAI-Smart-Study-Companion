import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

export const uploadMaterial = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post("/upload-material", formData);
};

export const generateSummary = async (text) => {
  return api.post("/generate-summary", {
    text,
  });
};

export const generateFlashcards = async (text) => {
  return api.post("/generate-flashcards", {
    text,
  });
};

export const generateSchedule = (text) => {
  return axios.post("http://127.0.0.1:5000/api/generate-schedule", {
    text,
  });
};

export default api;