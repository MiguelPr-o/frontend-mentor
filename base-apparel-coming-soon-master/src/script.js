const message = document.querySelector(".container__form span");
const iconError = document.querySelector(".icon-error")
const email = document.querySelector(".form-email")

email.addEventListener("invalid", (e) => {
   e.preventDefault() 
   message.style.display = "inline"
   iconError.style.display = "block"
})
