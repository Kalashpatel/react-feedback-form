import React, { useState } from "react";
import "./App.css";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleAddFeedback = (data) => {
    setFeedbacks([...feedbacks, data]);
  };

  return (
    <div className="app-container">
      <FeedbackForm onSubmit={handleAddFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
