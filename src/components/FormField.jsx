import React from "react";

export default function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  as,
}) {
  const Tag = as || "input";

  return (
    <div className="mb-2">
      <label>{label}</label>
      <Tag
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        rows={as === "textarea" ? 3 : undefined}
        required
      />
    </div>
  );
}
