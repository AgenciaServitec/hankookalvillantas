import { ButtonJsx, Form, Input, Textarea } from "../../components/ui";
import { useState } from "react";

const initialForm = {
  firstName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <Input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="Ingrese Nombres"
        onChange={handleChange}
      />
      <Input
        type="mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ingrese email"
      />
      <Input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Ingrese teléfono"
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
