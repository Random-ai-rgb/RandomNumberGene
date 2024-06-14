document.getElementById("b").addEventListener("click",generateRand);

const arr=[11,56,34,21,18,2,77,34,69,12,14,5,88,52,40,82,11,14,31,98] 
var index = 0;
function generateRand(){
    let number = arr[index++];
    document.getElementById('number').innerText = number;
}
