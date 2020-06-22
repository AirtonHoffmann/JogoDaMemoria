min = 1
max = 20

figuara01 = new Object()
figuara01.imagem = null
figuara01.id = null

figuara02 = new Object()
figuara02.imagem = null
figuara02.id = null

preloadImagem = new Array()
for(i = 0; i < 21; i++){
    preloadImagem[i] = new Image()
    preloadImagem[i].src = `imagens/${i}.jpg`
}

for(i = 0; i < 40; i++){
    img = window.document.getElementById(i)  
    img.src = preloadImagem[0].src
}

tabuleiro = new Array()
for(i = 0; i < 40; i++){  
    tabuleiro[i] = gerarAleatiro()
}

function gerarAleatiro() {
    num = 0
    cont = 0
    do{
        cont = 0
        num = Math.floor(Math.random() * (max - min + 1)) + min
        for(j = 0; j < tabuleiro.length; j++){
            if(num == tabuleiro[j])
                cont++
        }
    }while (cont > 1)
    return num
}

function revelar(id){
    if(figuara01.imagem == null || figuara02.imagem == null){
        if(figuara01.imagem == null){
            figuara01.imagem = tabuleiro[id]
            figuara01.id = id
            mudarImagem(id)
        }
        else{
            figuara02.imagem = tabuleiro[id]
            figuara02.id = id
            mudarImagem(id)
        }
    }
}

function mudarImagem(id){
    img = window.document.getElementById(id)  
    img.src = preloadImagem[tabuleiro[id]].src
}

function verificar(){
    if(figuara01.imagem != null && figuara02.imagem != null){
        if(figuara01.imagem != figuara02.imagem){  
            img = window.document.getElementById(figuara01.id)  
            img.src = preloadImagem[0].src
            img = window.document.getElementById(figuara02.id)  
            img.src = preloadImagem[0].src
        }
        sleep(1000)
        figuara01.imagem = null
        figuara01.id = null
        figuara02.imagem = null
        figuara02.id = null
    }
    
}

setInterval(verificar, 500)

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
/*function ocultar (){
    if(comparar == true){
        sleep(1000)
        comparar = false
        if(tabuleiro[imagem01] != tabuleiro[imagem02]){
            img = window.document.getElementById(imagem01)  
            img.src = `imagens/${0}.jpg` 
            img = window.document.getElementById(imagem02)  
            img.src = `imagens/${0}.jpg` 
        }else{
            img = window.document.getElementById(imagem01)  
            img.src = `imagens/${41}.jpg` 
            img = window.document.getElementById(imagem02)  
            img.src = `imagens/${41}.jpg` 
        }
            imagem01 = 0
            imagem02 = 0
    }
}



for(i = 0; i < 40; i++){
    img = window.document.getElementById(i + 1)  
    img.src = `imagens/${tabuleiro[i]}.jpg`
}*/