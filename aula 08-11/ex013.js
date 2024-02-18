function dados() {
    // -------------------------------------------------------------
    var a = window.document.getElementById("nome-dono")
    var b = window.document.getElementById("matricula")
    var c = window.document.getElementById("marca-carro")
    var d = window.document.getElementById("modelo-carro")
    var e = window.document.getElementById("ano-fabrico")
    var f = window.document.getElementById("km-h")

    var user = String(a.value).toUpperCase()
    var matri = String(b.value).toUpperCase()
    var marca = String(c.value).toUpperCase()
    var model = String(d.value).toUpperCase()
    var year = Number(e.value)
    var estado = String(f.value).toUpperCase()

    var txt = window.document.getElementById("saida-txt")
    // --------------------------------------------------------------
    
    if (estado == "NACIONAL") {
        txt.innerHTML=`Nome: ${user} <br>
        Matricula do Veículo: ${matri} <br>
        Marca do Veículo: ${marca} <br>
        Modelo do Veículo: ${model} <br>
        Ano de Fabrico do Veículo: ${year} <br>
        Multas: Sem multas`
    } else {
        txt.style.textAlign = "justify";
        txt.innerHTML=`Sr. ${user}, lamentamos mas este serviço nao esta disponível para veículos ou cidadaos estrangeiros.`
    }
}