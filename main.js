let arrayOfSheeps = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true];

let btnCount = document.getElementById('btn-count');

btnCount.addEventListener('click', countSheeps);

function countSheeps(){

const count = arrayOfSheeps.filter(Boolean).length;

console.log(count);

document.getElementById("result").innerHTML = count;
}