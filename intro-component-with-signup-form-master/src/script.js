const firstName = document.querySelector(".data-item-1");
const lastName = document.querySelector(".data-item-2");
const email = document.querySelector(".data-item-3");
const password = document.querySelector(".data-item-4");
const button = document.querySelector(".data-item-5");
const regExp = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

button.addEventListener("click", e =>{
   e.preventDefault();
   let validFirstName = validateField(firstName);
   let validlastName = validateField(lastName);
   let validEmail = validateEmail(email);
   let validPassword = validateField(password)
   if(validFirstName && validlastName && validEmail && validPassword){
      document.querySelector(".form-data").submit()
   }
})

function validateEmail(email){
   const error = document.querySelector(`.${email.classList[0]} ~ p`)
   if(!regExp.test(email.value)){
      error.style.visibility = "visible"
      email.classList.add("data-item-invalid")
      email.value = ""
      email.setAttribute("placeholder", "email@example.com")
      return false;
   }else{
      email.classList.remove("data-item-invalid")
      error.style.visibility = "hidden"
      return true;
   }
}

function validateField(input){
   const error = document.querySelector(`.${input.classList[0]} ~ p`)
   if(!input.value){
      input.classList.add("data-item-invalid")
      error.style.visibility = "visible";
      return false;
   }else{
      input.classList.remove("data-item-invalid")
      error.style.visibility = "hidden"
      return true;
   }
}

