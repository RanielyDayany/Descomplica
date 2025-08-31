//Imagine que você está organizando uma festa de aniversário
//Os blocos de código são como diferentes áreas da festa,onde diferentes atividades acontecem
//Por exemplo,você pode ter uma área para dançar,uma área para jogos e uma área para comer

{
    //Área para dançar
    console.log("Hora de dançar!");
    
}

{
    //Área para jogos
    console.log("Vamos jogar!");

}

{
    //Área para comer
    console.log("Hora de comer!");

}

//Os rótulos são como etiquetas que você coloca em diferentes atividades durante a festa,para identificá-las

//Imagine que você tem uma competição de dança e uma competição de jogos acontecendo ao mesmo tempo:

danca:
for(let i = 0;i < 3;i++){
    jogos:
    for(let j = 0;j < 3;j++){
        if(i === 1 && j === 1){
            console.log("A competição de dança foi interrompida!");//Sai da competição de dança
            break danca;  
        }
        console.log("Competidor "+(i+1)+"está dançando enquanto o competidor "+(j+1)+ " está jogando")
    }
}

/*
    O código simula uma situação em que há uma competição de dança e uma competição de jogos 
    acontecendo simultaneamente.
    Os loops for aninhados representam as duas competições onde cada competidor está envolvido 
    tanto na dança quanto nos jogos.
    Quando uma condição específica pe atendida (no caso i===1 && j===1),a competição de dança é 
    interrompida e uma mensagem é exibida utilizando o rótulo danca para sair do loop da competição de dança.
    Isso demontra o uso dos rótulos para controlar o fluxo do código em situações específicas
*/



