const btn1 = document.querySelector('.btn1');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');

btn1.addEventListener('click', ()=>{
    btn1.classList.add('active');
});

btn3.addEventListener('click', ()=>{
    btn3.classList.add('active');
});

btn4.addEventListener('click', ()=>{
    btn4.classList.add('active');
});