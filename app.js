function getCredit(agreement, age, yesWorks){
    let summCredit = 0;
    if (age >= 24 && yesWorks && agreement){
        return summCredit = 500;
    } else if (age >= 24 && agreement){
        return summCredit = 100;
    } else{
        return summCredit = false;
    }
}

function buyProduct(priceProduct, agreement, age, cash, yesWorks){
    if(cash >= priceProduct){
        return true;
    } else{
        return getCredit(agreement, age, yesWorks) + cash >= priceProduct ? true : false;
    }
    
}

console.log(buyProduct(2000, true, 24, 1500, true));