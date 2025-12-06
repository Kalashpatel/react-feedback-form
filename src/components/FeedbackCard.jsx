import React from "react";

export default function FeedbackCard({ data }) {
  return (
    <div className="card p-3 mb-3">
      <h5>
        {data.name} ({data.email})
      </h5>
      <p>
        <strong>Category:</strong> {data.category}
      </p>
      <p>
        <strong>Priority:</strong> {data.priority}
      </p>
      <p>
        <strong>Description:</strong> {data.description}
      </p>

      {data.screenshot && (
        <img
          src={data.screenshot}
          alt="screenshot"
          className="img-fluid mb-2"
        />
      )}

      <p>
        <strong>Steps:</strong>
      </p>
      <ul>
        {data.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <p>
        <strong>Suggestions:</strong>
      </p>
      <ul>
        {data.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {data.notes && (
        <p>
          <strong>Notes:</strong> {data.notes}
        </p>
      )}

      <p className="text-muted small">Submitted: {data.time}</p>
    </div>
  );
}
