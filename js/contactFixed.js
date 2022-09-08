const elementFormContactFx = document.querySelector("#form-contact-us-fixed");
const elementBtnSendEmailFx = document.querySelector("#btn-send-message-fixed");
const elementsFormFixed = document.querySelectorAll(
  ".contact-form-fixed__elements"
);

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

    const elementsFormFixedValues = [...elementsFormFixed].map(
      (element) => element.value
    );
    
    const userIpInfo = await fetchUserIpInfo();

    const formData =  mapContactFx(elementsFormFixedValues,userIpInfo);

    const response = await fetchSendEmail(formData);

    if (!response.ok) throw new Error(response.statusText);

    isVisibleFormContactFx(false);

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

const mapContactFx = (elementsFormFixedValues,userIpInfo) => ({
  firstName: elementsFormFixedValues[0],
  lastName: elementsFormFixedValues[1],
  email: elementsFormFixedValues[2],
  phoneNumber: elementsFormFixedValues[3] || null,
  issue: elementsFormFixedValues[4],
  message: elementsFormFixedValues[5],
  additionalInfo: userIpInfo || null,
  hostname: window.location.hostname || "hankookalvillantas.com",
});
