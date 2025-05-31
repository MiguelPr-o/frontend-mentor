const container = document.querySelector(".extension");
const optionAll = document.querySelector(".option-all");
const optionActive = document.querySelector(".option-active");
const optionInactive = document.querySelector(".option-inactive");
const changeTheme = document.querySelector(".change-theme");
const extensionOptions = document.querySelector(".extension-list__options");

const items = [];

const getData = async()=>{
   const res = await fetch("data.json");
   await res.json()
   .then(data => {
      data.forEach(item => {
      let itemDiv = document.createElement("DIV");

      itemDiv.classList.add("extension-item");
      itemDiv.innerHTML = `
            <div class="extension-content">
               <img src="${item.logo}" alt="logo">
               <div class="extension-info">
                  <h2>${item.name}</h2>
                  <p>${item.description}</p>
               </div>
            </div>
            <div class="extension-actions">
               <button class="btn-remove">Remove</button>
               <button class="btn-toggle btn-toggle-active">
                  <div class="circle"></div>
               </button>
            </div>`;

      let btnToggle = itemDiv.querySelector(".btn-toggle");
      let circle = itemDiv.querySelector(".circle");
      let btnRemove = itemDiv.querySelector(".btn-remove");
      if(!item.isActive) {
         circle.classList.add("circle-move")
         btnToggle.classList.remove("btn-toggle-active");
      }
      // check if item is active or not
      btnToggle.addEventListener("click", ()=>{
         btnToggle.classList.toggle("btn-toggle-active");
         circle.classList.toggle("circle-move");
         item.isActive = !item.isActive;
      })
      // remove item from the list
      btnRemove.addEventListener("click", ()=>{
         itemDiv.remove();
      })
      container.append(itemDiv);
      items.push([itemDiv, item]);
      })
   })
}
await getData();

changeTheme.addEventListener("click", ()=>{
   const img = document.querySelector(".change-theme img");
   if(img.src.includes("icon-moon.svg")){
      img.src = "../assets/images/icon-sun.svg";
      console.log(img.src)
      document.body.classList.toggle("dark-theme")
   }else {
      img.src = "../assets/images/icon-moon.svg";
      console.log(img.src)
      document.body.classList.toggle("dark-theme")
   }
})

extensionOptions.addEventListener("click", (e)=>{
   const target = e.target;
   // remove active class from all options
   document.querySelectorAll(".option-item").forEach(option => {
         option.classList.remove("option-item-active")
   })
   // add active class to the clicked option
   if(target.classList.contains("option-all")) {
      items.forEach(([itemDiv, item]) => {
         itemDiv.style.display = "flex";
         target.classList.add("option-item-active")
      })
   } else if(target.classList.contains("option-active")) {
      items.forEach(([itemDiv, item]) => {
         if(item.isActive) itemDiv.style.display = "flex";
         else itemDiv.style.display = "none";
         target.classList.add("option-item-active")
      })
   } else if(target.classList.contains("option-inactive")) {
      items.forEach(([itemDiv, item]) => {
         if(!item.isActive) itemDiv.style.display = "flex";
         else itemDiv.style.display = "none";
         target.classList.add("option-item-active")
      })
   }
})
