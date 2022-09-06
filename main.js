const form = document.querySelector("form")
const cardName = document.querySelector(".card-name")
const cardNum = document.querySelector(".card-number")
const cardMonth = document.querySelector(".card-month")
const cardYear = document.querySelector(".card-year")
const cardSlash = document.querySelector(".card-slash")
const cardCvc = document.querySelector(".card-cvc")
const section2 = document.querySelector(".sec2")
const allInputs = document.querySelectorAll("input")

section2.classList.add("hide")
//elimina la clase input-error de todos los inputs ya que esa clase solo se debe agregar cuando se envia el formulario con el input en blanco
allInputs.forEach(input =>{
  input.classList.remove("input-error")
})

//esta funcion se ejecuta al ocurrir el evento input. esta funcion permite que al escribir en un input el mismo texto aparezca en la tarjeta
function dataCard(e){

  //si el input en su atributo name tiene como valor name eso quiere decir que estamos escribiendo en el input name entonces en ese caso lo que se escriba en el input ponerlo en la tarjeta
     if (e.target.getAttribute("name") === "name") { 
        cardName.textContent = e.target.value
    }   
     else if (e.target.getAttribute("name") === "num") {
        cardNum.textContent = e.target.value
    }   
    else if (e.target.getAttribute("name") === "month") {
        cardMonth.textContent = e.target.value
    }   
    else if (e.target.getAttribute("name") === "year") {
        cardYear.textContent = e.target.value
    }   
    else if (e.target.getAttribute("name") === "cvc") {
        cardCvc.textContent = e.target.value
    }   
}
allInputs.forEach(input =>{
    //el evento input se activa cuando en un formulario se ingresan datos en un <input>, <textarea> o <select>
    input.addEventListener("input", dataCard)
})

function sendForm(e) {
    e.preventDefault();
    checkInputs();
}
form.addEventListener('submit', sendForm)

function checkInputs() {
  //allInputs[0] es el pimer input declarado en el codigo html
     if (allInputs[0].value === "") {
      setErrorFor(allInputs[0], "Can't be blank", 0);
    }  //* else {
      //setSuccessFor(allInputs[0])
    

    if (allInputs[1].value === "") {
      setErrorFor(allInputs[1], "Can't be blank", 0);
    } 
  /*else if (!isCardNumber(cardValue)) {
      setErrorFor(card, "Length must be 16");
    } else {
      setSuccessFor(card);
    }*/
  
    if (allInputs[2].value === "") {
      setErrorFor(allInputs[2], "Can't be blank", 0);
    }/*  else if (!isYear(yearValue)) {
      setErrorFor(year, "Invalid format");
    } else {
      setSuccessFor(year); */
    
  
    if (allInputs[3].value === "") {
      setErrorFor(allInputs[3], "Can't be blank", 0);
    }
    /*else if (!isMonth(monthValue)) {
      setErrorFor(month, "Invalid format");
    } else {
      setSuccessFor(month);
    }*/
  
    if (allInputs[4].value === "") {
      setErrorFor(allInputs[4], "Can't be blank", 0);
    } /*else if (!isCvc(cvcValue)) {
      setErrorFor(cvc, "Length must be 3-4");
    } else {
      setSuccessFor(cvc);
    }*/
  
    //si todos los inputs tienen un valor entonces ocultar los inputs y mostrar la seccion 2
    if (allInputs[0].value && allInputs[1].value && allInputs[2].value && allInputs[3].value && allInputs[4].value) {
    section2.classList.remove("hide")
    form.classList.add("hide") 
  }

  }
   
  function setErrorFor(input, message) {
    const formControl = input.parentElement; //se selecciona el contenedor padre del input enviado
    const span = formControl.querySelector("span");//del contenedor padre seleccionar el elemento span
    input.classList.add("input-error")//se añade la clase input-error para poner un borde rojo al input
    span.innerText = message;
  }
  /* function setSuccessFor(input, message) {
    const formControl = input.parentElement; //.form-control
    formControl.className = "form-control success";
  }
  
  function isCardNumber(card) {
    let number = /^[0-9]{16}$/;
    return number.test(card);
  }
  
  function isYear(year) {
    let yearNumber = /^[0-9]{2}$/g;
    return yearNumber.test(year);
  }
  
  function isMonth(month) {
    let monthNumber = /^(0[1-9]|1[0-2])/;
    return monthNumber.test(month);
  }
  function isCvc(cvc) {
    let digits = /^[0-9]{3,4}$/;
    return digits.test(cvc);
  }
 */

