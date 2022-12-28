let slVermelho = document.getElementById('vermelho')
let slAzul = document.getElementById('azul')
let slVerde = document.getElementById('verde')

let valorVermelho = 0
let valorAzul = 0
let valorVerde = 0

slVermelho.addEventListener('input', function (e){
  valorVermelho = slVermelho.value
    document.body.style.setProperty('background', `rgb(${valorVermelho}, ${valorVerde}, ${valorAzul})`)
    console.log (valorVermelho, valorVerde, valorAzul)
})

slAzul.addEventListener('input', function (e){
    valorAzul = slAzul.value
    document.body.style.setProperty('background', `rgb(${valorVermelho}, ${valorVerde},  ${valorAzul})`)
    console.log (valorVermelho, valorVerde, valorAzul)
})

slVerde.addEventListener('input', function (e){
    valorVerde = slVerde.value
    document.body.style.setProperty('background', `rgb(${valorVermelho}, ${valorVerde}, ${valorAzul} )`)
    console.log (valorVermelho, valorVerde, valorAzul)
})
