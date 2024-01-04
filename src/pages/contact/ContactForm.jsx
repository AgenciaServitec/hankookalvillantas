import { ButtonJsx, Form, Input, Textarea } from "../../components/ui";
import { useFormNative } from "../../hooks";

const initialForm = {
  firstName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const ContactForm = () => {
  const { errors, formData, handleChange, validateInput } = useFormNative({
    initialForm,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateInput()) return;

    console.log("formData->", formData);
  };

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <Input
        type="text"
        name="firstName"
        placeholder="Ingrese Nombres"
        formData={formData}
        onChange={handleChange}
        error={errors}
      />
      <Input
        type="mail"
        name="email"
        formData={formData}
        onChange={handleChange}
        placeholder="Ingrese email"
        error={errors}
      />
      <Input
        type="number"
        name="phoneNumber"
        formData={formData}
        onChange={handleChange}
        placeholder="Ingrese teléfono"
        error={errors}
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />

      <ButtonJsx type="submit">Enviar</ButtonJsx>
    </Form>
  );
};

export default ContactForm;
