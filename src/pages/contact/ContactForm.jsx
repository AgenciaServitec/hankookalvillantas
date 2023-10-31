import { Form, Input } from "../../components/index.js";

const ContactForm = () => {
  return (
    <>
      <Form>
        <Input placeholder="Ingrese Nombres" />
        <Input type="email" placeholder="Ingrese email" />
        <Input type="numbre" placeholder="Ingrese teléfono" />
      </Form>
    </>
  );
};

export default ContactForm;
