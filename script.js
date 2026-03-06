//Visor ou interface
const visor = document.querySelector("#display")
//estado da calculadora
let expressao = []
let resultadoMostrado = false
const operadores = ["+", "-", "*", "/", "%", "."]

//Selecionar o teclado e criar o evento
const teclado = document.querySelector(".buttons") //Este é o teclado
teclado.addEventListener("click", function (e) { //quando clicar num botão do teclado,
    //a função e...

    if (e.target.tagName !== "BUTTON") { return } //se não for botão, retorne

    const valor = e.target.value //botões

    //------CLEAR--------//
    if (valor === "clear") { //se o botão for clear...
        expressao.length = 0 //apague tudo
        visor.value = expressao.join("") //atualizo o visor
        return
    }

    //------DELETE--------//
    else if (valor === "deleteOne") { //se o botão for delete...
        expressao.pop() //apague o último
        visor.value = expressao.join("") //atualizo o visor
        return
    }

    //------IGUAL À--------//
    else if (valor === "equals") { //se o botão for o "igual à"

        const conta = expressao.join("")//destransformo o array
        const resultado = eval(conta) //calculo a expressão string

        visor.value = resultado //atualiza o visor
        expressao = [resultado] //continuo o rolê da calculadora
        resultadoMostrado = true //resultadoMostrado true
        return
    }

    // NÚMEROS E OPERADORES
    const ultimo = expressao[expressao.length - 1] //olha o penúltimo caractere digitado

    //------OPERADORES--------//
    if (resultadoMostrado && !operadores.includes(valor)) { //se não for operador...   
        expressao.length = 0 //ele zera a expressao
        resultadoMostrado = false //muda o estado da calculadora
    }
    else {
        resultadoMostrado = false //Independente do que aconteça, o resultado precisa virar
        //false, porque o equals quebra e não poderá ser usado novamente
    }

    //BLOQUEIO DE EXCESSO DE OPERADORES
    if (operadores.includes(valor) && operadores.includes(ultimo)) {
        expressao[expressao.length - 1] = valor //substitui o penúltimo operador pelo
        //ultimo
    }

    else {
        expressao.push(valor) //pega o valor digitado do e.target e coloca dentro da expressao
    }
    //ISOLADO, SÓ ATUALIZA O VISOR
    visor.value = expressao.join("") //atualiza o visor
})
