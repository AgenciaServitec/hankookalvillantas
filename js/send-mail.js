/* const elementForm = document.querySelector("#form-fixed");

const apiUrl =
  "https://us-central1-alvillantas.cloudfunctions.net/api";

elementForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const firstName = document.querySelector("#input-first-name-fx").value;
    const lastName = document.querySelector("#input-last-name-fx").value
    const email = document.querySelector("#input-email-fx").value;
    const phoneNumber = document.querySelector("#input-phone-number-fx").value;
    const issue = document.querySelector("#input-issue-fx").value;
    const message = document.querySelector("#input-message-fx").value;

    const data = {
      contact: {
        firstName: firstName.toLowerCase(),
        lastName: lastName.toLowerCase(),
        email: email.toLowerCase(),
        phoneNumber: phoneNumber,
        issue: issue.toLowerCase(),
        message: message,
      },
    };

    const response = await fetch(`${apiUrl}/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log("response:",response);

    if (response.ok === true) {
      window.location.href = "../gracias.html";
    } else {
      throw Error("Ocurrio un error al enviar el email!");
    }
  } catch (e) {
    console.log("SendEmail->", e);
    alert("Error al enviar el mensaje, intentelo mas tarde"); 
  }
}); */