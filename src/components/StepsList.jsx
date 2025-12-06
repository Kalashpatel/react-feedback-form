import React from "react";

export default function StepsList({ form, setForm }) {
  const updateStep = (i, value) => {
    const newSteps = [...form.steps];
    newSteps[i] = value;
    setForm({ ...form, steps: newSteps });
  };

  const addStep = () => setForm({ ...form, steps: [...form.steps, ""] });

  const removeStep = (i) => {
    const newSteps = form.steps.filter((_, index) => index !== i);
    setForm({ ...form, steps: newSteps });
  };

  return (
    <div className="mb-3">
      <label>Steps to Reproduce</label>
      {form.steps.map((step, index) => (
        <div className="input-group mb-1" key={index}>
          <input
            className="form-control"
            value={step}
            onChange={(e) => updateStep(index, e.target.value)}
          />
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeStep(index)}
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={addStep}
      >
        + Add Step
      </button>
    </div>
  );
}
