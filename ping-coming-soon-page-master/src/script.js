const email = document.querySelector(".notification-email");
const button = document.querySelector(".notification-button")
const expReg = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm);
const error = document.querySelector(".container-email p");

button.addEventListener("click", (e)=>{
   e.preventDefault()
   if(!expReg.test(email.value)) {
      email.classList.add("error");
      error.style.display = "inline"
   } else {
      email.classList.remove("error");
      error.style.display = "none"
   }
})