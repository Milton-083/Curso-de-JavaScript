// INICÍO VARIÁVEIS -----------------------------------------------------

var joker = new Date();

var $ano = joker.getFullYear();
var $mes = joker.getMonth(); // converter
var $semana = joker.getDay(); // converter
var $dia = joker.getDate();
var $hora = joker.getHours();
var $minuto = joker.getMinutes();

var txt_h3 = window.document.getElementById("hh3");
var txt_h4 = window.document.getElementById("hh4");

var mudar_img = window.document.getElementById("image-st");
var tudo = window.document.getElementsByTagName("body")[0];

// FIM VARIÁVEIS --------------------------------------------------------

// CAMPO SWITCH ---------------------------------------------------------

switch ($mes) {
    case 0:
        $mes = "Janeiro"
        break;
    case 1:
        $mes = "Fevereiro"
        break;
    case 2:
        $mes = "Março"
        break;
    case 3:
        $mes = "Abril"
        break;
    case 4:
        $mes = "Maio"
        break;
    case 5:
        $mes = "Junho"
        break;
    case 6:
        $mes = "Julho"
        break;
    case 7:
        $mes = "Agosto"
        break;
    case 8:
        $mes = "Setembro"
        break;
    case 9:
        $mes = "Outubro"
        break;
    case 10:
        $mes = "Novembro"
        break;
    case 11:
        $mes = "Dezembro"
        break;
    default:
        window.alert("ERRO! Mês nao encontrado no sestema.")
        break;
}

switch ($semana) {
    case 0:
        $semana = "domingo"
        break;
    case 1:
        $semana = "segunda-feira"
        break;
    case 2:
        $semana = "terça-feira"
        break;
    case 3:
        $semana = "quarta-feira"
        break;
    case 4:
        $semana = "quinta-feira"
        break;
    case 5:
        $semana = "sexta-feira"
        break;
    case 6:
        $semana = "sabado"
        break;
    default:
        window.alert("ERRO! Dia da semana nao encontrado no sestema.")
        break;
}

// FIM CAMPO SWITCH -----------------------------------------------------
$hora = 6
// CAMPO LOGICO ---------------------------------------------------------

if ($hora >= 5 && $hora <= 11) { // MANHA JA ESTA PRONTO.
    mudar_img.src = "img/manha_2.jpg";
    mudar_img.alt = "imagem de um nascer do sol";
    tudo.style.background = "url(img/fundo-manha.jpg"
}
else if ($hora >= 12 && $hora <= 13) {
    mudar_img.src = "img/dozehoras.jpg";
    mudar_img.alt = "imagem do meio dia";
    tudo.style.background = "rgba(216, 198, 40, 0.87)";
}
else if ($hora >= 13 && $hora <=15) {
    mudar_img.src = "img/fimdatarde.jpg";
    mudar_img.alt = "imagem de fim da tarde";
    tudo.style.background = "orange";
}
else if ($hora >= 16 && $hora <= 17) {
    mudar_img.src = "img/por-do-sol.jpg";
    mudar_img.alt = "imagem de um por do sol";
    tudo.style.background = "orangered";
}
else if ($hora >= 18 && $hora <= 21) {
    mudar_img.src = "img/noite.jpg";
    mudar_img.alt = "imagem de uma cidade a noite.";
    tudo.style.background = "rgba(20, 25, 77, 0.897)";
}
else if ($hora >= 22  && $hora <= 23 || $hora >= 0 && $hora <= 4) {
    mudar_img.src = "img/madrugada.jpg"
}

// FIM CAMPO LOGICO -------------------------------------------------------

// CAMPO DE TEXTO ---------------------------------------------------------

txt_h3.innerHTML=`Agora sao ${$hora} horas e ${$minuto} minutos`
txt_h4.innerHTML=`${$semana}, ${$dia} de ${$mes} de ${$ano}`
// FIM CAMPO DE TEXTO ------------------------------------------------------
