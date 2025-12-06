import React, { useState, useRef } from "react";
import StepsList from "./StepsList";
import SuggestionsList from "./SuggestionsList";
import FormField from "./FormField";

export default function FeedbackForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    description: "",
    steps: [""],
    suggestions: [""],
  });

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      time: new Date().toLocaleString(),
    };

    onSubmit(data);

    setForm({
      name: "",
      email: "",
      category: "",
      priority: "",
      description: "",
      steps: [""],
      suggestions: [""],
    });
    screenshotRef.current.value = "";
    notesRef.current.value = "";
  };

  return (
    <form className="card p-3 mb-4" onSubmit={handleSubmit}>
      <h4>Submit Feedback</h4>

      <FormField
        label="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <FormField
        label="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <FormField
        label="Description"
        name="description"
        as="textarea"
        value={form.description}
        onChange={handleChange}
        required
      />

      <div className="mb-2">
        <label>Issue Category</label>
        <select
          className="form-select"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option>Bug</option>
          <option>Suggestion</option>
          <option>Complaint</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mb-2">
        <label>Priority</label>
        <select
          className="form-select"
          name="priority"
          value={form.priority}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      <StepsList form={form} setForm={setForm} />
      <SuggestionsList form={form} setForm={setForm} />

      <div className="mb-2">
        <label>Screenshot URL (optional)</label>
        <input ref={screenshotRef} className="form-control" />
      </div>

      <div className="mb-2">
        <label>Additional Notes</label>
        <textarea ref={notesRef} className="form-control" rows="2" />
      </div>

      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
}
