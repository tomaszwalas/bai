const losujLiczbe =(min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const arr = [];

const uzupelnijTablice = (ilosc) =>{
    for(var i=0;i<ilosc;i++){
        arr.push(losujLiczbe(5,20));
    }
    return arr;
}

console.log(uzupelnijTablice(10));