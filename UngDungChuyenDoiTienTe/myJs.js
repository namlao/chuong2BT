function getAmout() {
    let Amout = document.s('Amout').value;
    Amout = parseInt(Amout);
    return Amout;
}
function getFromCurrency() {
    let fromCurrency = document.getElementById('From_Currency').value;
    return fromCurrency;
}
function getToCurrency() {
    let toCurrency = document.getElementById('To_Currency').value;
    return toCurrency;
}

function Convert(Amout,From_Currency,To_Currency) {
    let result =0;
    let usdToVND = 23000;
    let jpToVND = 214;
    let usdtoJP = 109;
    if (From_Currency == "VND"){
        if (To_Currency == "VND"){
            result = Amout*1;
        } else if (To_Currency == "USD") {
            result = Amout/usdtoJP;
        } else if (To_Currency == "JP") {
            result = Amout/jpToVND;
        }
    }
    if (From_Currency == "USD"){
        if (To_Currency == "VND"){
            result = Amout*usdToVND;
        } else if (To_Currency == "USD") {
            result = Amout*1;
        } else if (To_Currency == "JP") {
            result = Amout/usdtoJP;
        }
    }
    if (From_Currency == "JP"){
        if (To_Currency == "VND"){
            result = Amout*jpToVND;
        } else if (To_Currency == "USD") {
            result = Amout*usdtoJP;
        } else if (To_Currency == "JP") {
            result = Amout*1;
        }
    }

    document.getElementById("result").innerText = result;
}