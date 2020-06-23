jogar = false

erros = 0
porcentagem = 100

min = 1
max = 20

figuara01 = new Object()
figuara01.imagem = null
figuara01.id = null

figuara02 = new Object()
figuara02.imagem = null
figuara02.id = null

ss = 0
mm = 0
hh = 0

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

function mudarImagem(idElemento, idImagem){
    img = window.document.getElementById(idElemento)  
    img.src = preloadImagem[idImagem].src
}

function revelar(id){
    if(tabuleiro[id] != null && jogar == true){
        if(figuara01.imagem == null || figuara02.imagem == null){
            if(figuara01.imagem == null){
                figuara01.imagem = tabuleiro[id]
                figuara01.id = id
                mudarImagem(id, tabuleiro[id])
            }
            else if(id != figuara01.id){
                figuara02.imagem = tabuleiro[id]
                figuara02.id = id
                mudarImagem(id, tabuleiro[id])
                setTimeout(verificar, 500)
            }
        }
    }
}

function verificar(){
    if(figuara01.imagem != null && figuara02.imagem != null){
        if(figuara01.imagem != figuara02.imagem){  
            mudarImagem(figuara01.id, 0)
            mudarImagem(figuara02.id, 0)
            erros++
            porcentagem = Math.trunc(20*100/(20+erros))
        }else{
            tabuleiro[figuara01.id] = null
            tabuleiro[figuara02.id] = null
        }
        figuara01.imagem = null
        figuara01.id = null
        figuara02.imagem = null
        figuara02.id = null
    }
}

function comecarJogo(){
    if(jogar == false){
        jogar = true
        setInterval(() => { timer(); }, 1000)
        img = window.document.getElementById('botao')  
        img.src = 'imagens/jogar.png'
    }else{
        document.location.reload()
    }  
}

function timer() {
    ss++; 
    if (ss == 59) { 
        ss = 0 
        mm++ 
        if (mm == 59) { 
            mm = 0
            hh++
        }
    }

    format = '<strong>Points '+porcentagem+'% &nbsp;&nbsp;&nbsp; Time '+(hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)+'</strong>'
    document.getElementById('pontos').innerHTML = format
}