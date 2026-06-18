function calculateRisk(){

let balance = parseFloat(document.getElementById("balance").value)||0;
let risk = parseFloat(document.getElementById("risk").value)||0;
let sl = parseFloat(document.getElementById("sl").value)||0;

let riskAmount = (balance * risk)/100;
let lot = riskAmount / sl;

document.getElementById("result").innerHTML =
"Risk Amount: $" + riskAmount.toFixed(2) +
"<br>Lot Size: " + lot.toFixed(2);
}

function calculateProfit(){

let buy = parseFloat(document.getElementById("buy").value)||0;
let sell = parseFloat(document.getElementById("sell").value)||0;
let qty = parseFloat(document.getElementById("qty").value)||0;

let profit = (sell - buy) * qty;

document.getElementById("result").innerHTML =
(profit>=0?"Profit: $":"Loss: $") + Math.abs(profit).toFixed(2);
}

function calculateCompound(){

let amount = parseFloat(document.getElementById("amount").value)||0;
let percent = parseFloat(document.getElementById("percent").value)||0;
let months = parseFloat(document.getElementById("months").value)||0;

let total = amount;

for(let i=0;i<months;i++){
total += total * percent/100;
}

document.getElementById("result").innerHTML =
"Final Balance: $" + total.toFixed(2);
}

function calculateSL(){

let entry = parseFloat(document.getElementById("entry").value)||0;
let sl = parseFloat(document.getElementById("sl_price").value)||0;

let diff = Math.abs(entry - sl);

document.getElementById("sl_result").innerHTML =
"Stop Loss Distance: " + diff.toFixed(2);
}
