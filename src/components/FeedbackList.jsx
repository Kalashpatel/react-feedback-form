import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackList({ feedbacks }) {
  return (
    <div>
      {feedbacks.map((item, index) => (
        <FeedbackCard key={index} data={item} />
      ))}
    </div>
  );
}
