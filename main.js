const form = document.querySelector("form")
const names = document.querySelector(".card-front-text2")
const num = document.querySelector(".card-front-text1")
const date = document.querySelector(".card-front-text3")
const cvc = document.querySelector(".card-back-text")
const section2 = document.querySelector(".sec2")

section2.classList.add("hide")

form.addEventListener('submit', sendForm)

function sendForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    names.textContent = data.get("name")
    num.textContent = data.get("num")
    cvc.textContent = data.get("cvc")
    date.textContent = `${data.get("month")}/${data.get("year")}`

    section2.classList.remove("hide")

    form.classList.add("hide")

}

