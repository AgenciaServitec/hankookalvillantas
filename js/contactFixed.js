const elementFormContactFx = document.querySelector("#form-contact-us-fixed");
const elementBtnSendEmailFx = document.querySelector("#btn-send-message-fixed");
const elementsFormFixed = document.querySelectorAll(
  ".contact-form-fixed__elements"
);
const elementTermsAndConditions = document.querySelector("#checkbox-terms-and-conditions");

elementFormContactFx.addEventListener("submit", (e) =>
  validateFormContactFx(e)
);

const validateFormContactFx = async (e) => {
  try {
    e.preventDefault();

    activeSpinnerInButton(elementBtnSendEmailFx);

    const result = validateFormFields(
      [...elementsFormFixed],
      ["contact-form-fixed__company"]
    );

    if (!result) return false;

    if(!elementTermsAndConditions.checked) return alert("Debe aceptar los términos y condiciones antes de enviar el mensaje");

    const elementsFormFixedValues = [...elementsFormFixed].map(
      (element) => element.value
    );

    const userCoordinates = await getUserCoordinates();
    
    const userIpInfo = await fetchUserIpInfo();

    const formData = await mapContactFx(elementsFormFixedValues,userCoordinates,userIpInfo);

    const response = await fetchSendEmail(formData);

    if (!response.ok) throw new Error(response.statusText);

    window.location.href = "../gracias.html";
  } catch (e) {
    console.log("Error email send:", e);
    alert("Lo sentimos, no se pudo enviar el mensaje, intentelo mas tarde.");
    /* notification(
      "danger",
      "Lo sentimos, no se pudo enviar el mensaje, intentelo mas tarde."
    ); */
  } finally {
    activeSpinnerInButton(elementBtnSendEmailFx, false, "Enviar");
  }
};

const mapContactFx = (elementsFormFixedValues,userCoordinates,userIpInfo) => ({
  firstName: elementsFormFixedValues[0],
  lastName: elementsFormFixedValues[1],
  email: elementsFormFixedValues[2],
  phoneNumber: elementsFormFixedValues[3],
  issue: elementsFormFixedValues[4],
  message: elementsFormFixedValues[5],
  coordinates: userCoordinates,
  additionalInfo: userIpInfo,
  termsAndConditions: elementTermsAndConditions.checked
});
