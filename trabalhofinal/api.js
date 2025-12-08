
async function ibge() {
    const painel = document.querySelector('#resultado');
    const url='https://brasilapi.com.br/api/ibge/municipios/v1/rs?providers=dados-abertos-br,gov,wikipedia';
    let resposta=  await fetch(url);
    let js = await resposta.json();

    painel.innerHTML+=`<h2>Cidades do RS</h2>`;
js.forEach(element => {
    painel.innerHTML+=
         `<br><hr><br>
          <b>${element.nome}<br>`
});
    
         
}

async function ddd() {
    const painel = document.querySelector('#resultado');
    const url=`https://brasilapi.com.br/api/ddd/v1/53`;
    let resposta=  await fetch(url);
    let js = await resposta.json();

    painel.innerHTML+=`<h2>Cidades com ddd 53</h2>`;
js.cities.forEach(element => {
    painel.innerHTML+=
         `<br><hr><br>
          <b>${element}<br>`
});
    
         
}
// "age" : 53, "ageextended" : { "years" : 53, "months" : 0, "days" : 6
async function idade() {
    const painel = document.querySelector('#resultado');
    const data=document.querySelector('#data').value;

    const url=`https://digidates.de/api/v1/age/${data}`;
    console.log(data);
    console.log("oi");
    let resposta=  await fetch(url);
    let js = await resposta.json();

    painel.innerHTML+=`<h2>A sua idade é:</h2>`;

    painel.innerHTML+=
         `<br><hr><br>
          <b>anos:${js.ageextended.years}<br>
           <b>meses:${js.ageextended.months}<br>
            <b>dias:${js.ageextended.days}<br>
          `
          ibge();
          ddd();
        };


        
  
        async function progresso() {
            const painel = document.querySelector('#resultado');
            const url=`https://digidates.de/api/v1/progress?start=2025-01-01&end=2025-12-31`;
            let resposta=  await fetch(url);
            let js = await resposta.json();
        
            painel.innerHTML+=`<h2>Já passou ${js.percent}% do ano.</h2>`
        };

//main
const data=document.querySelector('#data').value;
const datac=document.querySelector('#data');
datac.addEventListener("change",idade);
progresso();
