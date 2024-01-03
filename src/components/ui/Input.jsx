export const Input = ({
  type = "text",
  placeholder = "Escribe tu nombre",
  value = "",
  name,
  onChange,
  error = false,
  errorMsg = "",
}) => (
  <>
    <label htmlFor="" style={{ maxWidth: "100%", minWidth: "100%" }}>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          padding: "0.8em 0.5em",
          borderRadius: "0.5em",
          maxWidth: "100%",
          minWidth: "100%",
          border: error ? "2px solid red" : "none",
          outline: "none",
          fontSize: "1em",
          fontFamily: "system-ui, sans-serif",
        }}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p
          style={{
            color: "red",
            fontWeight: 500,
            transition: " .2s ease-out",
            textAlign: "start",
            padding: "0.5em 0 0 0.5em",
          }}
        >
          {errorMsg}
        </p>
      )}
    </label>
  </>
);
