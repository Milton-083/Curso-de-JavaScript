


function verificando() {
    var coletar_ano = Number(window.document.getElementById("age").value);
    var coletar_sexo = String(window.document.getElementById("campo-sexo").value);
    var joker = new Date();
    var ano = joker.getFullYear();
    var idade = ano - coletar_ano;
    var $conteiner = window.document.getElementById("contei");
    var txt_h4 = window.document.getElementById("hh4");
    var $img = window.document.getElementById("img");


//   ---------------------------------------------------------------------
    $conteiner.style.height = "60vh";
    $img.style.height = "250px";
    $img.style.width = "250px";

    if (coletar_ano == 0 || coletar_sexo == "sexo") { // eliminando falhas do programador.
        $conteiner.style.height = "15vh";
        txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        $img.style.height = "0";
        $img.style.width = "0";
    }
    else if (coletar_ano > ano || coletar_sexo == "sexo") { // eliminando falhas dos clientes traquinas
        $conteiner.style.height = "15vh";
        txt_h4.innerHTML=`Por favor insira um <u><i>ano de nascimento</i></u> valido!`;
        $img.style.height = "0";
        $img.style.width = "0";
    }
    else if (idade == 1) { // faixa dos BEBÉS
        txt_h4.innerHTML=`Detectamos um Bebé de ${idade} ano de idade.`
        $img.src = "image/a1 (23).jpg";
    }
    else if (idade >= 2 && idade <= 12) { // faixa das CRIANÇAS

        if (coletar_sexo == "masculino") { 
            txt_h4.innerHTML=`Detectamos um Menino ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
            
        }
        else if (coletar_sexo == "femenino") {
            txt_h4.innerHTML=`Detectamos uma Menina de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        }
        else {
            $conteiner.style.height = "15vh";
            txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        }
    }
    else if (idade >= 13 && idade <= 17) { // faixa dos ADOLESCENTES

        if (coletar_sexo == "masculino") {
            txt_h4.innerHTML=`Detectamos um Adolescente de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        }
        else if (coletar_sexo == "femenino") {
            txt_h4.innerHTML=`Detectamos uma Adolescente de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        } 
        else {
            $conteiner.style.height = "15vh";
            txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        }
    }
    else if (idade >= 18 && idade <= 20) { // faixa dos JOVENS
        if (coletar_sexo == "masculino") {
            txt_h4.innerHTML=`Detectamos um Jovem de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        }
        else if (coletar_sexo == "femenino") {
            txt_h4.innerHTML=`Detectamos uma Jovem de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        } 
        else {
            $conteiner.style.height = "15vh";
            txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        }
    }
    else if (idade >= 21 && idade <= 60) { // faixo dos ADULTOS
        if (coletar_sexo == "masculino") {
            txt_h4.innerHTML=`Detectamos um Homem de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        }
        else if (coletar_sexo == "femenino") {
            txt_h4.innerHTML=`Detectamos uma Mulher de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        } 
        else {
            $conteiner.style.height = "15vh";
            txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        }
    }
    else { // faixa dos IDOSOS
        if (coletar_sexo == "masculino") {
            txt_h4.innerHTML=`Detectamos um Homem Idoso de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        }
        else if (coletar_sexo == "femenino") {
            txt_h4.innerHTML=`Detectamos uma Mulher Idosa de ${idade} anos de idade.`;
            $img.src = "image/a1 (23).jpg";
        } else {
            $conteiner.style.height = "15vh";
            txt_h4.innerHTML=`ERRO! Um dos campos nao foi devidamente prenchido.`;
        }
    }
}
//    ---------------------------------------------------------------------------