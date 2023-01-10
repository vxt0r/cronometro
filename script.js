let segundos = 0
let minutos = 0
let horas = 0

const seg = document.querySelector('.seg')
const min = document.querySelector('.min')
const hor = document.querySelector('.hor')

const mostrarTimer = ()=>{
    seg.innerText = `0${segundos}` 
    min.innerText = `0${minutos}`
    hor.innerText = `0${horas}`
}

mostrarTimer()

const aumentarTempo = (unidade,div)=>{
    unidade++
    div.innerText = `0${unidade}` 
    if(unidade > 9 && unidade < 60){
        div.innerText = `${unidade}` 
    }
    else if(unidade > 59){
        unidade = 0
        div.innerText = `0${unidade}` 
    }
    return unidade
}

const segundo = 1000
const minuto = 60000
const hora = 36000000

let timerSeg
let timerMin
let timerHor

const iniciarTimer = ()=>{
    timerSeg = setInterval(()=>{
        segundos = aumentarTempo(segundos,seg)
    },segundo)
    timerMin = setInterval(()=>{
        minutos = aumentarTempo(minutos,min)
    },minuto)
    timerHor = setInterval(()=>{
        horas = aumentarTempo(horas,hor)
    },hora)
    
}

const btnIniciar = document.querySelector('.iniciar')
btnIniciar.addEventListener('click',iniciarTimer)

const pausar = ()=>{
    clearInterval(timerSeg)
    clearInterval(timerMin)
    clearInterval(timerHor)
}

const btnPausar = document.querySelector('.pausar')
btnPausar.addEventListener('click',pausar)

const resetar = ()=>{
    pausar()
    segundos = 0
    minutos = 0
    horas = 0
    mostrarTimer()
}

const btnResetar = document.querySelector('.resetar')
btnResetar.addEventListener('click',resetar)











