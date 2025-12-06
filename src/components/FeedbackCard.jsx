import React from "react";

export default function FeedbackCard({ data }) {
  return (
    <div className="feedback-card">
      <h3>{data.name}</h3>
      <p>{data.email}</p>

      <span className="badge category">{data.category}</span>
      <span className={`badge priority-${data.priority.toLowerCase()}`}>
        {data.priority}
      </span>

      <p><strong>Description:</strong> {data.description}</p>

      {data.screenshot && (
        <img
          src={data.screenshot}
          alt="Screenshot"
          style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
        />
      )}

      <p><strong>Steps:</strong></p>
      <ul>
        {data.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <p><strong>Suggestions:</strong></p>
      <ul>
        {data.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <small style={{ opacity: 0.7 }}>Submitted: {data.time}</small>
    </div>
  );
}
