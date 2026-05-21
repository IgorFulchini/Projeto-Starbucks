const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

let dolarToday = 0;
let euroToday = 0;

async function fetchRates() {
    try {
        const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL");
        const data = await response.json();
        dolarToday = parseFloat(data.USDBRL.bid);
        euroToday = parseFloat(data.EURBRL.bid);
    } catch (error) {
        dolarToday = 5.2;
        euroToday = 6.2;
    }
}

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    if(currencySelect.value === "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US',{
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
    }

    if(currencySelect.value === "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE',{
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

function changeCurrency(){ 
    const currencyName = document.getElementById("currency-name");
    const currencyImg = document.querySelector(".currency-img");

    if(currencySelect.value === "dolar"){
        currencyName.innerHTML = "Dólar Americano";
        currencyImg.src = "./img/dolar.png";
    }

    if(currencySelect.value === "euro"){
        currencyName.innerHTML = "Euro";
        currencyImg.src = "./img/euro.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

fetchRates();