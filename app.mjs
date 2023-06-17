//adding all values which are given
window.add = function add(){
//Gold
let gold = document.querySelector("#gold").value;
gold = Number(gold);
console.log("Gold: " , gold);

//Silver
let silver = document.querySelector("#silver").value;
silver = Number(silver);
console.log("Silver: ", silver);

//Local and Foreign Currency with Current Rates
let localCurrency = document.querySelector("#localCurrency").value;
localCurrency = Number(localCurrency);
console.log("Local Currency and Foreign Currency: ", localCurrency);

//Bank Currency
let bankCurrency = document.querySelector("#bankCurrency").value;
bankCurrency = Number(bankCurrency);
console.log("Bank Currency: ", bankCurrency);

//Prize Bonds
let prizeBond = document.querySelector("#prizeBond").value;
prizeBond = Number(prizeBond);
console.log("Prize Bond: ", prizeBond);

//Deposit Money
let depositMoney = document.querySelector("#depositMoney").value;
depositMoney = Number(depositMoney);
console.log("Deposit Money: ", depositMoney);

//Commitee
let comitee = document.querySelector("#comitee").value;
comitee = Number(comitee);
console.log("Commitee: ", comitee);

//Raw Material
let rawMaterial = document.querySelector("#rawMaterial").value;
rawMaterial = Number(rawMaterial);
console.log("Raw Material: ", rawMaterial);

//Factory Goods
let factoryGoods = document.querySelector("#factoryGoods").value;
factoryGoods = Number(factoryGoods);
console.log("Factory Goods: ", factoryGoods);

//trading
let trading = document.querySelector("#trading").value;
trading = Number(trading);
console.log("Trading: ", trading);

//buisness
let buisness = document.querySelector("#buisness").value;
buisness = Number(buisness);
console.log("Buisness: ", buisness);

let adding = (gold + silver + localCurrency + prizeBond + depositMoney + bankCurrency + comitee + rawMaterial + factoryGoods + trading + buisness);
adding = Number(adding);

let output = adding;
console.log("Total: ", output);

document.querySelector("#total").innerHTML = (output);


//function for liabilities from total zakah
 
window.liability = function liability(){

    let loan = document.querySelector("#loan").value;
    loan = Number(loan);
    console.log("Loan: ", loan);

    let installments = document.querySelector("#installments").value;
    installments = Number(installments);
    console.log("Installments: ", installments);

    let payableCommitee = document.querySelector("#payableCommitee").value;
    payableCommitee = Number(payableCommitee);
    console.log("Payable Commitee: ", payableCommitee);

    let utilityBills = document.querySelector("#utilityBills").value;
    utilityBills = Number(utilityBills);
    console.log("Utility Bill: ", utilityBills);

    let payDealer = document.querySelector("#payDealer").value;
    payDealer = Number(payDealer);
    console.log("Pay Dealer: ", payDealer);

    let employeSalary = document.querySelector("#employeSalary").value;
    employeSalary = Number(employeSalary);
    console.log("Employee Salary: ", employeSalary);

    let unpaidZakah = document.querySelector("#unpaidZakah").value;
    unpaidZakah = Number(unpaidZakah);
    console.log("Unpaid Zakah: ", unpaidZakah);

    let liabiliti = (loan + installments + payableCommitee + utilityBills + payDealer + employeSalary + unpaidZakah);
    liabiliti = Number(liabiliti);
    console.log("Liabilities: ", liabiliti);

    document.querySelector("#liabilities").innerHTML = (liabiliti);
    let amountZakahHasBeenCalculated = (output - liabiliti);
    console.log("Amount that Zakah has been Calculated: ", amountZakahHasBeenCalculated);

    document.querySelector("#zakahCalculated").innerHTML = (amountZakahHasBeenCalculated);
    
    //document.querySelector("#computingZakahh").innerHTML = (amountZakahHasBeenCalculated);

    let payableZakah ;
    if(amountZakahHasBeenCalculated > 100000){
        payableZakah = (amountZakahHasBeenCalculated / 40);
    }else{
        payableZakah = 0
    }
    
    document.querySelector("#payable").innerHTML = (payableZakah);
}
}