/* Dias da semana em JavaScript 

    0 - Domingo;
    1 - Segunda;
    2 - Terça;
    3 - Quarta;
    4 - Quinta;
    5 - Sexta;
    6 - Sabado.
    
*/ // -----------------------

var agora = new Date()

var ano = agora.getFullYear()
var mes = agora.getMonth()
var week_day = agora.getDay()
var data = agora.getDate()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var segundo = agora.getSeconds()

var txt1 = window.document.querySelector("h1#hh1")
var txt2 = window.document.querySelector("h3#hh3")

switch (mes) {
    case 0:
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Maio"
        break;
    case 5:
        mes = "Junho"
        break;
    case 6:
        mes = "Julho"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;
    default:
        window.alert("ERRO! Mês do ano nao encontrado.")
        break;
}

switch (week_day) {
    case 0:
        week_day = "Domingo"
        break;
    case 1:
        week_day = "Segunda-Feira"
        break
    case 2:
        week_day = "Terça-Feira"
        break
    case 3:
        week_day = "Quarta-Feira"
        break
    case 4:
        week_day = "Quinta-Feira"
        break
    case 5:
        week_day = "Sexta-Feira"
        break
    case 6:
        week_day = "Sabado"
    default:
        window.alert("ERRO! Dia da semana nao encontrado.")
        break;
}

txt1.innerHTML=`${week_day}, ${data} de ${mes} de ${ano}`
txt2.innerHTML=`${hora}:${minuto}:${segundo}`