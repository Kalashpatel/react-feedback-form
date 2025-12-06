import React from "react";

export default function SuggestionsList({ form, setForm }) {
  const updateSuggestion = (i, value) => {
    const newList = [...form.suggestions];
    newList[i] = value;
    setForm({ ...form, suggestions: newList });
  };

  const addItem = () =>
    setForm({ ...form, suggestions: [...form.suggestions, ""] });

  const removeItem = (i) => {
    const newList = form.suggestions.filter((_, index) => index !== i);
    setForm({ ...form, suggestions: newList });
  };

  return (
    <div className="mb-3">
      <label>Suggested Improvements</label>
      {form.suggestions.map((s, index) => (
        <div className="input-group mb-1" key={index}>
          <input
            className="form-control"
            value={s}
            onChange={(e) => updateSuggestion(index, e.target.value)}
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeItem(index)}
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={addItem}
      >
        + Add Suggestion
      </button>
    </div>
  );
}
