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
allInputs.forEach(input => {
  input.classList.remove("input-error")
})

//esta funcion se ejecuta al ocurrir el evento input. esta funcion permite que al escribir en un input el mismo texto aparezca en la tarjeta
function dataCard(e) {

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
allInputs.forEach(input => {
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
  } else if (onlyNumber(allInputs[1].value)) {
    setErrorFor(allInputs[1], "Input must be only numbers");
  } else if (!onlyNumberLenght(allInputs[1].value)) {//si no se cumple la regexp ejecutar setError()
    setErrorFor(allInputs[1], "Length must be 16");
  }

  /*else {
       setSuccessFor(card);
     }*/

  if (allInputs[2].value === "") {
    setErrorFor(allInputs[2], "Can't be blank", 0);
  }else if (onlyNumber(allInputs[2].value)) {
    setErrorFor(allInputs[2], "Input must be only numbers");
}
  else if (!isMonth(allInputs[2].value)) {
    setErrorFor(allInputs[2], "Length must be 2");
  } /*else {
      setSuccessFor(year); */


  if (allInputs[3].value === "") {
    setErrorFor(allInputs[3], "Can't be blank", 0);
  }else if (onlyNumber(allInputs[3].value)) {
    setErrorFor(allInputs[3], "Input must be only numbers");
}
  else if (!isYear(allInputs[3].value)) {
    setErrorFor(allInputs[3], "Length must be 2");
  } /*else {
      setSuccessFor(month);
    }*/

  if (allInputs[4].value === "") {
    setErrorFor(allInputs[4], "Can't be blank", 0);
  } else if (onlyNumber(allInputs[4].value)) {
    setErrorFor(allInputs[4], "Input must be only numbers");
}else if (!isCvc(allInputs[4].value)) {
    setErrorFor(allInputs[4], "Length must be 3");
  } /*else {
      setSuccessFor(cvc);
    }*/

  //si todos los inputs tienen un valor correcto entonces ocultar los inputs y mostrar la seccion 2
  if (allInputs[0].value && allInputs[1].value && allInputs[2].value && allInputs[3].value && allInputs[4].value) {
    section2.classList.remove("hide")
    form.classList.add("hide")
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //se selecciona el contenedor padre del input enviado
  const span = formControl.querySelector("span");//del contenedor padre seleccionar el elemento span
  input.classList.add("input-error")//se añade la clase input-error para poner un borde rojo al input cuando se envia el formulario con erorres
  span.innerText = ""//limpia el texto que haya en el span
  span.innerText = message;
}

function onlyNumberLenght(card) {
  let number = /^[0-9]{16}$/;//solo se pueden ingresar 16 numeros del 0 al 9
  return number.test(card);
}

function onlyNumber(card) {
  let number = /^[a-z]/gi;//solo se pueden ingresar numeros del 0 al 9
  return number.test(card);
}

function isMonth(month) {
  let yearNumber = /^[0-9]{2}$/g;
  return yearNumber.test(month);
}

function isYear(year) {
  let monthNumber = /^(0[1-9]|1[0-2])/;
  return monthNumber.test(year);
}

function isCvc(cvc) {
  let digits = /^[0-9]{3,4}$/;
  return digits.test(cvc);
}


