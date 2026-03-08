import { adicionarNumero, operadores } from "./script.js"

addEventListener("keydown", function (e) { //checa o evento de pressionar teclas
    const tecla = e.key //variável para melhor leitura: é a tecla pressionada
    
    if (tecla == "Enter"){ //se a tecla pressionada for Enter...
        this.document.querySelector("#equal").click() //simula o click do botão de igual
        // o que executa a função do script
        return
    }

    //resolver depois para uma função, porque será necessário refatorar o script.js
    
    if (!/[0-9]/.test(tecla) && !operadores.includes(tecla)) {
        console.log(tecla)
        return
    } // se for diferente de um número entre 0 e 9 e não for um operador: retorna

    adicionarNumero(tecla) //adiciona a tecla ao array e atualiza o display
})

