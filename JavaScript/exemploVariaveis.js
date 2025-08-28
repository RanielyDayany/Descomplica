//Exemplo de uso de var,let e const em JavaScript

const externo = "Olá,eu sou uma constante global!";

//Declaração de uma variável usando var
function exemploVar(){
    if(true){
        var mensagem = "Olá,faculdade descomplica!Eu sou uma var..."
    }
    console.log(mensagem);
}

//Chamando a função exemploVar
exemploVar();

//Exemplo de erro e correção
var mensagem1 = "Olá,Faculdade Descomplica!Escopo externo!";
//A var dentro do if so funciona quando eu chamo dentro daquela função,se eu só colocasse o console.log aqui sem essa nova var aqui em cima iria dar um erro
console.log(mensagem1);

//Declaração de uma variável usando let
function exemploLet(){
    if(true){
        let mensagem = "Olá,Faculdade Descomplica!Eu sou uma let";
        console.log(mensagem)
    }  
}

//Chamando a função exemploLet
exemploLet()

//Exemplo de erro e correção
let mensagem = "Olá Descomplica!Let externo"
console.log(mensagem);
//A princípio dá um erro pois a variável var tem o mesmo nome "mensagem",por isso irei trocar o nome do var por mensagem1 lá em cima

//Declaração de uma constante usando const
function exemploConstante(){
    const mensagem = "Olá,Faculdade Descomplica!Eu sou uma constante..."
    console.log(mensagem)
}

//Chamando a função exemploConst
exemploConstante();

//Exemplo externo de const
console.log(externo);

//Exemplo externo tentar alterar constante global
externo = "Nova mensagem";//Dá erro porque não pode alterar const

//Demonstrando o escopo global de var

//Demonstrando o escopo de bloco de let

//Exemplo do escopo inacessível



