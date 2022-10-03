const frutas = ["laranja", "limão", "uva", "banana"];

/*addFrutas = (array) => {
    let lista1 = document.getElementById("fruta-1") 
    lista1.innerHTML = array[0]

    let lista2 = document.getElementById("fruta-2") 
    lista2.innerHTML = array[1]

    let lista3 = document.getElementById("fruta-3") 
    lista3.innerHTML = array[2]
}
addFrutas(frutas)*/


let listaFrutas = document.getElementsByTagName("li")

for(let i in frutas) {
    listaFrutas[i]. innerHTML = frutas[i]
}

const valorAtualInput = () => {
    let conteudoInput = document.getElementById("lista")
    console.log(conteudoInput.value)
}

const adicionar = () => {
  const lista = document.getElementById("lista-de-frutas")
  let conteudoInput = document.getElementById("lista")
  lista.innerHTML += `<li>${conteudoInput.value}</li>`
  conteudoInput.value =""
}
