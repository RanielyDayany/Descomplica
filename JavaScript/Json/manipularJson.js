//Exemplo:manipulação de dados Json

//Objeto JSON inicial
let pessoa = {
    "nome": "João",
    "idade": "30",
    "endereco": {
        "rua": "Rua Principal",
        "numero": 123
    },
    "telefones": ["1234-5678", "8765-4321"]
};

console.log(pessoa);

//Acessar dados
console.log("\nAcessar dados:");
console.log(pessoa.nome);
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua);
console.log(pessoa["telefones"][0]);

//Adicionar dados
console.log("\nAdicionar dados:");
pessoa.email = "joao@example.com";
console.log(pessoa);

//Modificar dados
console.log("\nModificar dados:");
pessoa.idade = 31;
pessoa.endereco.rua = "Rua Secundária";
console.log(pessoa);

//Remover dados
console.log("\nRemover dados:");
delete pessoa.telefones;

//Existência da Propriedade:Se a propriedade não existir no objeto,
//o operador delete não causará um erro,apenas não fará nada
//O operador delete não pode ser usado para remover variáveis declaradas com var,let ou const
//Ele só funciona para propriedades de objetos

console.log(pessoa);

//Operações com Arrays
console.log("\nOperações com Arrays:");
pessoa.hobbies = ["leitura", "esportes"];
console.log(pessoa.hobbies[1]);
pessoa.hobbies.push("viagens");
console.log(pessoa.hobbies);

//Iterar sobre as propriedades do objeto
console.log("\nIterar sobre as propriedades do objeto:");

//for...in não deve ser usado para iterar sobre arrays se a ordem dos elemetos for importante
//pois a ordem de iteração não é garantida

for(let chave in pessoa){
    console.log(chave + ": " + pessoa[chave]);
}

//Converter de e para JSON
console.log("\nConverter de e para JSON:");
let jsonTexto = JSON.stringify(pessoa);

console.log(jsonTexto);

let objetoPessoa = JSON.parse(jsonTexto);
console.log(objetoPessoa);