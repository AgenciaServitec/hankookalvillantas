export const Input = ({
  type = "text",
  placeholder = "Escribe tu nombre",
  formData = {},
  name = "",
  onChange,
  error = {},
}) => {
  const errorMessage = error[name];

  const valueInput = formData[name];

  return (
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
            border: !!errorMessage ? "2px solid red" : "none",
            outline: "none",
            fontSize: "1em",
            fontFamily: "system-ui, sans-serif",
          }}
          name={name}
          value={valueInput ?? ""}
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
            {errorMessage}
          </p>
        )}
      </label>
    </>
  );
};
