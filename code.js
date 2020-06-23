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
    preloadImagem[i].src = `imagens/${i}.png`
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
    if(tabuleiro[id] != null){
        if(figuara01.imagem == null || figuara02.imagem == null){
            if(figuara01.imagem == null){
                figuara01.imagem = tabuleiro[id]
                figuara01.id = id
                mudarImagem(id)
            }
            else if(id != figuara01.id){
                figuara02.imagem = tabuleiro[id]
                figuara02.id = id
                mudarImagem(id)
            }
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
        }else{
            tabuleiro[figuara01.id] = null
            tabuleiro[figuara02.id] = null
        }
        sleep(500)
        figuara01.imagem = null
        figuara01.id = null
        figuara02.imagem = null
        figuara02.id = null
    }
    
}

setInterval(verificar, 100)

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}