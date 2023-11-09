let plys = document.querySelector('.plys');
console.log(plys);
let minys = document.querySelector('.minys');
console.log(minys);
let umn = document.querySelector('.umn');
console.log(umn);
let del = document.querySelector('.del');
console.log(del);
let res = document.querySelector('.res');
console.log(res);
plys.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    console.log(num1);
    let num2 = +document.querySelector('.num2').value;
    console.log(num2);
    res.innerText = num1 + num2
})


minys.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    console.log(num1);
    let num2 = +document.querySelector('.num2').value;
    console.log(num2);
    res.innerText = num1 - num2
})


umn.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    console.log(num1);
    let num2 = +document.querySelector('.num2').value;
    console.log(num2);
    res.innerText = num1 * num2
})


del.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    console.log(num1);
    let num2 = +document.querySelector('.num2').value;
    console.log(num2);
    if (num2 == 0){
        res.innerText = 'На 0 делить нельзя!'
    } else{
    res.innerText = num1 / num2
    }
})