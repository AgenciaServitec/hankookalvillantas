import { useEffect, useRef, useState } from "react";

export const useFormNative = ({ initialForm = {} }) => {
  const [formData, setFormData] = useState(initialForm);
  const [errorMsg, setErrorMsg] = useState({});
  const isFirstRender = useRef(true);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInput = () => {
    for (let value in formData) {
      if (formData[value].trim().length === 0) {
        const errorObject = { [value]: { error: "Completar campos" } };

        setErrorMsg((prevState) => ({ ...prevState, ...errorObject }));
      } else {
        setErrorMsg((prevState) => {
          delete prevState[value];
          const newState = { ...prevState };

          return newState;
        });
      }
    }
  };

  const isFormValid = (errorState) => {
    return Object.keys(errorState).length === 0;
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    validateInput();
  }, [formData]);

  return {
    formData,
    errorMsg,
    handleChange,
    validateInput,
    isFormValid,
  };
};
