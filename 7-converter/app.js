
function converter(summ, OriginalCurrency, finalCurrency){
    let rub = 'rub', eur = 'eur', usd = 'usd';
    if(OriginalCurrency === rub && finalCurrency === usd){
        return `${summ  / 88.7} usd`
    } else if(OriginalCurrency === usd && finalCurrency === rub){
       return  `${summ * 88.7} rub`
    } else if(OriginalCurrency === rub && finalCurrency === eur){
        return `${summ  /  96.6} eur`
    }else if(OriginalCurrency === eur && finalCurrency === rub){
        return `${summ  *  96.6} rub`
    }
    else if(OriginalCurrency === eur && finalCurrency === usd){
        return `${summ  *  1.08} eur`
    }else if(OriginalCurrency === usd && finalCurrency === eur){
        return `${summ  /  1.08} usd`
    } else{
        return null;
    }
}
console.log(converter(11.2663,'usd', 'sa'));