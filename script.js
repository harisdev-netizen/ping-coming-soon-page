let $ = (id) => document.querySelector(id);

let message = $("#message");
let button = $("#button");

button.addEventListener("click", () => {
  let email = $("#email");

  validateEmail(email);
});

function validateEmail(value) {
  let regExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (regExp.test(value.value)) {
    message.textContent = `You have been subscribed successfully`;
    value.setAttribute(
      "style",
      "color: black; border: solid 0.2rem var(--blue);"
    );
  } else if (value.value === "") {
    message.textContent = `Whoops! It looks like you forgot to add your email`;
    value.setAttribute("style", "border: solid 0.2rem var(--light-red);");
    message.setAttribute("style", "color: var(--light-red)");
  } else {
    message.textContent = `Please provide a valid email address`;
    value.setAttribute("style", "border: solid 0.2rem var(--light-red);");
    message.setAttribute("style", "color: var(--light-red)");
  }
  message.classList.remove("inactive");
}
