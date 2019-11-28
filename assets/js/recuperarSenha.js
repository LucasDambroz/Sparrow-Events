var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
 
function exibir() {
    document.getElementById("loginSenha").style.display = "block";
}
 
function ocultar() {
    document.getElementById("loginSenha").style.display = "none";
    document.getElementById("some").style.display = "none";

}
 
function ocultarExibir() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("esqueciasenha").style.display = "none";//Ocultamos a div
        document.getElementById("somee").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("esqueciasenha").style.display = "block";//Exibimos a div..
        document.getElementById("somee").style.display = "none";//Ocultamos a div
        visibilidade = true;//Alteramos o valor da variável para true.
    }
}
