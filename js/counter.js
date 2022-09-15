let countHome = document.getElementById('home-counter');
let guestCount = document.getElementById('guest-counter');
console.log(countHome);
console.log(guestCount);

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn1-guest');
const btn5 = document.querySelector('.btn2-guest');
const btn6 = document.querySelector('.btn3-guest');
const resetBtnHome = document.querySelector('.reset-home');
const resetBtnGuest = document.querySelector('.reset-guest')

let innitialCount = 0;
let innitialCountGuest = 0;

btn1.addEventListener('click', increaseByOne);
btn2.addEventListener('click', increaseByTwo);
btn3.addEventListener('click', increaseByThree);
btn4.addEventListener('click', increaseByOneGuest);
btn5.addEventListener('click', increaseByTwoGuest);
btn6.addEventListener('click', increaseByThreeGuest);
resetBtnHome.addEventListener('click', onResetBtnHome);
resetBtnGuest.addEventListener('click', onResetBtnGuest)


function increaseByOne (){
   countHome.textContent = innitialCount +=1;
}

function increaseByTwo(){
    countHome.textContent = innitialCount +=2;
}

function increaseByThree(){
    countHome.textContent = innitialCount +=3;
}

function increaseByOneGuest() {
    guestCount.textContent = innitialCountGuest +=1;
}

function increaseByTwoGuest() {
    guestCount.textContent = innitialCountGuest +=2;
}

function increaseByThreeGuest() {
    guestCount.textContent = innitialCountGuest +=3;
}

function onResetBtnHome(){
    countHome.textContent = 0;
    innitialCount = 0;
}

function onResetBtnGuest(){
    guestCount.textContent = 0;
    innitialCountGuest = 0;
}