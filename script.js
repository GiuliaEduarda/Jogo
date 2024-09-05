var altura  
var largura 
var vidas = 1
var tempo = 20

var criaMoscasTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    criaMoscasTempo = 1500
}else if(nivel === 'dificil'){
    criaMoscasTempo = 1000
} else if( nivel === 'hardcore'){
    criaMoscasTempo = 750
}

function ajustaTamanhoTela(){
largura = window.innerWidth  
altura = window.innerHeight  
 }

ajustaTamanhoTela()

var cronometro = setInterval(function(){

    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMoscas)
        window.location.href = 'vitoria.html'
    }else {
        document.getElementById('cronometro').innerHTML = tempo}
    
}, 1000)

function posicaoRandomica(){

if(document.getElementById('mosca')){
    document.getElementById('mosca').remove()

        if(vidas > 3){
            window.location.href = 'fimdojogo.html'

        }else{
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
    
    vidas++}
    
}


var posicaoX = Math.floor(Math.random() * largura) - 90
var posicaoY = Math.floor(Math.random() * altura) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

var mosca = document.createElement('img')
mosca.src = 'imagens/mosca.png'
mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosca.style.left = posicaoX + 'px'
mosca.style.top = posicaoY + 'px'
mosca.style.position = 'absolute'
document.body.appendChild(mosca)
mosca.id = 'mosca'
mosca.onclick = function(){
    this.remove()
}

}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
     
    switch(classe){
        case 0:

            return 'mosquito1'

        case 1:

        return 'mosquito2'

        case 2:

            return 'mosquito3'

    }
}
function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
     
    switch(classe){
        case 0:

            return 'ladoA'

        case 1:

        return 'ladoB'

    

    }
}

/* fim das moscas */

