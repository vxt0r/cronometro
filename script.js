let segundos = 0
let minutos = 0
let horas = 0

const mostrarTimer = ()=>{
    $('.seg').text(`0${segundos}`)  
    $('.min').text(`0${minutos}`)
    $('.hor').text(`0${horas}`)
}

mostrarTimer()

const aumentarTempo = (unidade,div)=>{
    unidade++
    div.text(`0${unidade}`)
    if(unidade > 9 && unidade < 60){
        div.text(`${unidade}`) 
    }
    else if(unidade > 59){
        unidade = 0
        div.text(`0${unidade}`)
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
        segundos = aumentarTempo(segundos,$('.seg'))
    },segundo)
    timerMin = setInterval(()=>{
        minutos = aumentarTempo(minutos,$('.min'))
    },minuto)
    timerHor = setInterval(()=>{
        horas = aumentarTempo(horas,$('.hor'))
    },hora)
    
}

const pausar = ()=>{
    clearInterval(timerSeg)
    clearInterval(timerMin)
    clearInterval(timerHor)
}

const resetar = ()=>{
    pausar()
    segundos = 0
    minutos = 0
    horas = 0
    mostrarTimer()
}

$('.iniciar').click(iniciarTimer)
$('.pausar').click(pausar)
$('.resetar').click(resetar)











