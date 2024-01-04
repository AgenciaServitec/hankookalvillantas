import { useState } from "react";

export const useFormNative = ({ initialForm = {} }) => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = () => {
    let valid = true;
    const newErrors = {};

    // Validar el campo de nombre de usuario
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "El nombre de usuario es requerido";
      valid = false;
    }

    // Validar el campo de correo electrónico
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
      valid = false;
    }

    // Validar el campo del numero
    if (formData.phoneNumber.length < 6) {
      newErrors.phoneNumber = "El telefono debe tener al menos 6 caracteres";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  return {
    formData,
    errors,
    handleChange,
    validateInput,
  };
};
