async function getCurrencies () {
    const response = await fetch ('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;

    console.log(result);

    console.log(result.Valute.USD.Value);
    console.log(result.Valute.EUR.Value);
    console.log(result.Valute.KZT.Value);
    console.log(result.Valute.AED.Value);
}

getCurrencies();