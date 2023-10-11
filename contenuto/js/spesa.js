window.onload = () => {
const form = document.getElementById("listaSpesa")
form.onsubmit = function (e) {
    e.preventDefault()
}
const proImput = document.getElementById("add")
const prodotto = proImput.value;                     //stiamo inserendo i dati?
//console.log("sto funzionando")
const main = document.getElementsByTagName("main") [0]
const lista = document.createElement("div")                       //creazione del div class="lista"
lista.className = "lista"
//console.log("stofunzionando?")
const p = document.createElement("p")
p.innertext = prodotto  
const button = document.createElement("button");
button.innerText = "🗑️";                                       //creazione dei contenuti 
//console.log("sirompequalcosa?")
button.onclick = function(e) {
    const clickbott = e.target                             //funzionalità del bottone(ogni click rimuove l'elemento)
    clickbott.parentNode.remove()
}
//console.log("ciao")
lista.appendChild(p)
lista.appendChild(button)
main.appendChild(lista)
                            //non riesco ad inserire i prodotti tramite il form 
}