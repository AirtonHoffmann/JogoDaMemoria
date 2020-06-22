min = 1
max = 20

//velocidade = 100

//comparar = false

imagem01 = 0
imagem02 = 0

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
    if(imagem01 == 0){
        imagem01 = tabuleiro[id]
        img = window.document.getElementById(id)  
        img.src = preloadImagem[tabuleiro[id]].src
    }
    else{
        imagem02 = tabuleiro[id]
        img = window.document.getElementById(id)  
        img.src = preloadImagem[tabuleiro[id]].src
    }
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

function sleep(milliseconds) { //gera um delay, milliseconds determina a duracao
    start = new Date().getTime();
    for (s = 0; s < 1e7; s++) { //1e7 = 10,000,000
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

for(i = 0; i < 40; i++){
    img = window.document.getElementById(i + 1)  
    img.src = `imagens/${tabuleiro[i]}.jpg`
}*/