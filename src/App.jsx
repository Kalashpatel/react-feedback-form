import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (data) => {
    setFeedbacks([data, ...feedbacks]);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Customer Feedback & Issue Reporting</h2>
      <FeedbackForm onSubmit={handleSubmit} />
      <FeedbackList items={feedbacks} />
    </div>
  );
}
