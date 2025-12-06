import React from "react";
import FeedbackCard from "./FeedbackCard";

export default function FeedbackList({ items }) {
  return (
    <div>
      {items.map((fb, index) => (
        <FeedbackCard key={index} data={fb} />
      ))}
    </div>
  );
}
