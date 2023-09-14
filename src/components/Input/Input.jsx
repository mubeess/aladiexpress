import React from "react";
import "../styles/input.css";
import { Input as AntdInput } from "antd";

function Input({
  label,
  placeholder,
  type = "text",
  required = false,
  style,
  disabled,
  outlined,
  name,
  id,
  onChange,
  error,
  value,
}) {
  return (
    <div style={style} className="app_input">
      <div className="input_label">
        <span
          style={{
            fontSize: 11,
            fontWeight: "500",
            marginBottom: 0,
            color: "color: #514F4F;",
            textTransform: "uppercase",
            height: 20,
          }}
        >
          {label}
        </span>
        {required ? <span className="asteric">*</span> : null}
      </div>

      <AntdInput
        value={value}
        disabled={disabled}
        style={{
          opacity: disabled ? 0.5 : 1,
          backgroundColor: disabled ? "var(--gray)" : "var(--white)",
          border: outlined ? "1px solid var(--border)" : "none",
          // borderBottom: outlined
          //   ? "1px solid var(--border)"
          //   : "1px solid var(--primary)",
          borderBottom: outlined ? "1px solid var(--border)" : "none",
          borderRadius: outlined ? 5 : 0,
          height: 35,
        }}
        required={required}
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange(e)}
      />
      {error && (
        <div className="input_error">
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default Input;
