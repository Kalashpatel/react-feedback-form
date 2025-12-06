import React, { useState, useRef } from "react";

export default function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const [steps, setSteps] = useState([""]);
  const [suggestions, setSuggestions] = useState([""]);

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const addStep = () => setSteps([...steps, ""]);
  const removeStep = (i) => setSteps(steps.filter((_, index) => index !== i));

  const addSuggestion = () => setSuggestions([...suggestions, ""]);
  const removeSuggestion = (i) =>
    setSuggestions(suggestions.filter((_, index) => index !== i));

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      category,
      priority,
      description,
      steps,
      suggestions,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      time: new Date().toLocaleString(),
    });

    // Clear form
    setName("");
    setEmail("");
    setCategory("");
    setPriority("");
    setDescription("");
    setSteps([""]);
    setSuggestions([""]);
    screenshotRef.current.value = "";
    notesRef.current.value = "";
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Bug">Bug</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Complaint">Complaint</option>
        <option value="Other">Other</option>
      </select>

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="">Priority Level</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <textarea
        placeholder="Detailed Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      {/* Steps to Reproduce */}
      <h4>Steps to Reproduce:</h4>
      <button type="button" className="add-row-btn" onClick={addStep}>
        + Add Step
      </button>

      {steps.map((step, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder={`Step ${i + 1}`}
            value={step}
            onChange={(e) =>
              setSteps(steps.map((val, idx) => (idx === i ? e.target.value : val)))
            }
          />
          {steps.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeStep(i)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      {/* Suggestions */}
      <h4>Suggested Improvements:</h4>
      <button type="button" className="add-row-btn" onClick={addSuggestion}>
        + Add Suggestion
      </button>

      {suggestions.map((sug, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder={`Suggestion ${i + 1}`}
            value={sug}
            onChange={(e) =>
              setSuggestions(
                suggestions.map((val, idx) => (idx === i ? e.target.value : val))
              )
            }
          />
          {suggestions.length > 1 && (
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeSuggestion(i)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <input type="text" placeholder="Screenshot URL (optional)" ref={screenshotRef} />
      <textarea placeholder="Additional Notes" ref={notesRef}></textarea>

      <button className="submit-btn" type="submit">
        Submit Feedback
      </button>
    </form>
  );
}
