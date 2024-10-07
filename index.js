const number = document.getElementById("number");
let num = 0;
function increase(){
    num += 1;
    number.textContent = num;
}
function reset(){
    num = 0;
    number.textContent = num;
}
function decrease(){
    num -= 1;
    number.textContent = num;
}
