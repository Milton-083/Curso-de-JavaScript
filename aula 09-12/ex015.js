var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()

var txt = window.document.getElementById("hh1")
var txt1 = window.document.getElementById("hh3")

txt.innerHTML=`${horas}:${minutos}`

if (horas >= 1 && horas <= 3) {
    txt1.innerHTML=`Boa madrugada sr. Milton!`
}
else if (horas > 3 && horas < 12) {
    txt1.innerHTML=`Bom dia sr. Milton!`
}
else if (horas >= 12 && horas <= 18) {
    txt1.innerHTML=`Boa tarde sr. Milton!`
}
else {
    txt1.innerHTML=`Boa noite sr. Milton`
}
