import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TextInput from "../components/TextInput";
import SummaryCard from "../components/SummaryCard";
import FlashcardsList from "../components/FlashcardsList";
import ScheduleCard from "../components/ScheduleCard";
import QuizList from "../components/QuizList";
import Button from "../components/Button";
import Footer from "../components/Footer";
import UploadCard from "../components/UploadCard";
import Loader from "../components/Loader";

import toast from "react-hot-toast";

import {
  uploadMaterial,
  generateSummary,
  generateFlashcards,
  generateSchedule,
  generateQuiz,
} from "../services/api";

function Home() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [schedule, setSchedule] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filename, setFilename] = useState("");

  // Upload PDF/DOCX
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    try {
      const response = await uploadMaterial(file);

      setText(response.data.text);
      setFilename(response.data.filename);

      toast.success("File uploaded successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Upload failed.");
    }
  };

  // Generate Summary
  const handleGenerateSummary = async () => {
    if (!text.trim()) {
      toast.error("Please enter some study material.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateSummary(text);

      setSummary(response.data.summary);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to generate summary.");
    } finally {
      setLoading(false);
    }
  };

  // Generate Flashcards
  const handleGenerateFlashcards = async () => {
    if (!text.trim()) {
      toast.error("Please enter some study material.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateFlashcards(text);

      setFlashcards(response.data.flashcards);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to generate flashcards.");
    } finally {
      setLoading(false);
    }
  };

  // Generate Schedule
  const handleGenerateSchedule = async () => {
    if (!text.trim()) {
      toast.error("Please enter some study material.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateSchedule(text);

      setSchedule(response.data.schedule);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to generate schedule.");
    } finally {
      setLoading(false);
    }
  };

  // Generate Quiz
  const handleGenerateQuiz = async () => {
    if (!text.trim()) {
      toast.error("Please enter some study material.");
      return;
    }

    try {
      setLoading(true);

      const response = await generateQuiz(text);

      setQuiz(response.data.quiz);

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });

    } catch (error) {
      console.error(error);
      toast.error("Failed to generate quiz.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {loading && <Loader />}

      <Hero />

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Upload */}
        <UploadCard
          handleFileUpload={handleFileUpload}
          filename={filename}
        />

        {/* Text Area */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-8 mb-8">

          <h2 className="text-2xl font-bold text-white mb-4">
            📝 Study Material
          </h2>

          <TextInput
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">

          <Button
            title="📄 Generate Summary"
            loading={loading}
            onClick={handleGenerateSummary}
          />

          <Button
            title="🃏 Generate Flashcards"
            loading={loading}
            onClick={handleGenerateFlashcards}
          />

          <Button
            title="📅 Generate Schedule"
            loading={loading}
            onClick={handleGenerateSchedule}
          />

          <Button
            title="🧠 Generate Quiz"
            loading={loading}
            onClick={handleGenerateQuiz}
          />

        </div>

        {/* Results */}

        {summary && (
          <SummaryCard summary={summary} />
        )}

        {flashcards.length > 0 && (
          <FlashcardsList cards={flashcards} />
        )}

        {schedule && (
          <ScheduleCard schedule={schedule} />
        )}

        {quiz.length > 0 && (
          <QuizList quiz={quiz} />
        )}

      </div>

      <Footer />
    </>
  );
}

export default Home;