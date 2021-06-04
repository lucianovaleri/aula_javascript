function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    
}

function redirecionar(){
    window.open("https://www.farming-simulator.com/mods.php")
    // ABRE EM OUTRA JANELA
    window.location.href = "https://www.farming-simulator.com/mods.php";
    // ABRE NA MESMA JANELA

}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
        return validar;
}

var idade = prompt("Qual sua idade:");
console.log(validaIdade(idade));

alert(soma(5, 10));

alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*  TRABALHAR COM DATAS
var d = new Date();
alert(d.getDate());
alert(d.getDay());
alert(d.getFullYear());
*/

/*  TRABALHAR COM CONTADOR
for(var count = 0; count <= 5; count++){
    alert(count);
}
*/

/*while (count <= 5){
    console.log(count);
    count = count +1;
}
*/

/*  IF ELSE
var idade = prompt("Qual sua idade"); 
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/
    //LISTA (DICIONARIO)
//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1]); 

/*  LISTA COMUM
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor); 
*/

/*  ATRIBUIÇÃO VARIÁVEL
var nome = "Luciano Valeri";
var idade = 21;
alert(nome +" tem " + idade + " anos");
*/

/*  TRABALHAR COM LISTA 
var lista = ["maçã","pêra","laranja"]
lista.push("uva");
console.log(lista);

console.log(lista.reverse());
console.log(lista.toString());
*/