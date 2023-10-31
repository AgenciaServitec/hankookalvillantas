export const Input = ({
  type = "text",
  placeholder = "Escribe tu nombre",
  ...props
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      style={{
        padding: "0.5em",
        width: "100%",
        borderRadius: "0.5em",
        border: "none",
        outline: "none",
      }}
      {...props}
    />
  </>
);
