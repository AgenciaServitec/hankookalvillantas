export const Textarea = ({
  placeholder = "Escribe mensaje",
  value = "",
  name,
  onChange,
  error = false,
  errorMsg = "",
}) => {
  return (
    <>
      <label htmlFor="" style={{ maxWidth: "100%", minWidth: "100%" }}>
        <textarea
          placeholder={placeholder}
          style={{
            padding: "0.8em 0.5em",
            maxWidth: "100%",
            minWidth: "100%",
            borderRadius: "0.5em",
            border: error ? "2px solid red" : "none",
            outline: "none",
            fontSize: "1em",
            minHeight: "5em",
            fontFamily: "system-ui, sans-serif",
          }}
          name={name}
          onChange={onChange}
          value={value}
        ></textarea>
        {error && (
          <p
            style={{
              color: "red",
              fontWeight: 500,
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
};
