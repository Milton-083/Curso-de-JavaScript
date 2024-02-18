var idade = 51

window.document.write(`Idade: ${idade} <br>`)
if (idade < 16) {
    window.document.write("Você nao tem idade para votar!")
} 
else if (idade >= 16 && idade <= 50) {
    window.document.write("O teu voto é obrigatório.")
}
else {
    window.document.write("O teu voto é opcional.")
}