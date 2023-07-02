const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
    
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (emailValue === "" || passwordValue === "") {
    alert("Всі поля мають біти заповнені");
    return;
  }

  const loginData = {
    email: emailValue,
    password: passwordValue,
  };
    
  console.log(loginData);
  loginForm.reset();
};
