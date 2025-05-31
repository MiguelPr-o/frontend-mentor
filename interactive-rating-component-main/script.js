const sendButton = document.getElementById("send-button")

const calificacion = [];
for(let i = 0; i < 5; i++){
    calificacion[i] = document.getElementById(`number-${i + 1}`);
    console.log(calificacion);
}

const crearAgradecimiento = ()=>{
    let calif = undefined;
    calificacion.forEach((numberRadio)=>{
        numberRadio.addEventListener("click", (e)=>{
            calif = numberRadio.value;
            if(calif !== undefined){
                sendButton.addEventListener("click" ,(e)=>{
                    document.body.innerHTML = `<section class="section-thank-you section">
                        <div class="section-thank-you-img"></div>
                        <div class="number-selected">You selected ${calif} out of 5</div>
                        <h2>Thank you!</h2>
                        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitare to get in touch!</p>
                    </section>`
                });
            };
        })
    })
}
crearAgradecimiento();


// let numeros = [1,2,3,4,5].map(n => n % 2 == 0 ? false: n * 2)
// console.log(numeros)