//listeners
document.querySelector("#b1").addEventListener("click",verifica1);
document.querySelector("#b2").addEventListener("click",verifica2);
//funcoes
function verifica1(){
    if(document.querySelector("#p1resposta2").checked){
        document.querySelector("#resposta1").style.display="block";
        document.querySelector("#pergunta2").style.display="block";
        document.querySelector("#erroP1").style.display="none";
        document.querySelector("#b1").style.display="none";
    }
    else{
        document.querySelector("#erroP1").style.display="block";
    }
}
function verifica2(){
    if(document.querySelector("#p2resposta1").checked){
        document.querySelector("#resposta2").style.display="block";
        document.querySelector("#erroP2").style.display="none";
        document.querySelector("#b2").style.display="none";
    }
    else{
        document.querySelector("#erroP2").style.display="block";
    }
}

let gabarito=0;
function criarc(){
    let molecula=document.createElement("div");
    let texto=document.createTextNode("C");
    molecula.appendChild(texto);
    document.querySelector("#gabarito").appendChild(molecula);
}

function criarzn(){
    let molecula=document.createElement("div");
    let texto=document.createTextNode("Zn");
    molecula.appendChild(texto);
    document.querySelector("#gabarito").appendChild(molecula);
    gabarito=+1;
}

function criarh(){
    let molecula=document.createElement("div");
    let texto=document.createTextNode("H");
    molecula.appendChild(texto);
    document.querySelector("#gabarito").appendChild(molecula);
}

function criaro(){
    let molecula=document.createElement("div");
    let texto=document.createTextNode("O");
    molecula.appendChild(texto);
    document.querySelector("#gabarito").appendChild(molecula);
    if(gabarito==1){
        alert("parabéns! Você acertou!");
        const parent = document.getElementById("montar");
        const child = document.getElementById("alternativas");
        const throwawayNode = parent.removeChild(child);
        
    }
}