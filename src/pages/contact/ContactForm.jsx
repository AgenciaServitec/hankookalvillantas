import { useEffect } from "react";
import { ButtonJsx, Form, Input, Textarea } from "../../components/ui";

import { useFormNative } from "../../hooks";

const initialForm = {
  firstName: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const ContactForm = () => {
  const { errorMsg, formData, handleChange, isFormValid, validateInput } =
    useFormNative({
      initialForm,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    validateInput();

    if (!isFormValid(errorMsg)) return;

    console.log("formData->", formData);
  };

  return (
    <Form onSubmit={handleSubmit} method="POST">
      <Input
        type="text"
        name="firstName"
        value={formData.firstName}
        placeholder="Ingrese Nombres"
        onChange={handleChange}
        error={errorMsg?.firstName}
        errorMsg={errorMsg?.firstName?.error}
      />
      <Input
        type="mail"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ingrese email"
        error={errorMsg?.email}
        errorMsg={errorMsg?.email?.error}
      />
      <Input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Ingrese teléfono"
        error={errorMsg?.phoneNumber}
        errorMsg={errorMsg?.phoneNumber?.error}
      />
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errorMsg?.message}
        errorMsg={errorMsg?.message?.error}
      />

      <ButtonJsx type="submit">Enviar</ButtonJsx>
    </Form>
  );
};

export default ContactForm;
