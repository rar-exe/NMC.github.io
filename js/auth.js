let flag = false;

$('.registration').on('click', function(){
    $('.auth').toggleClass('flip');
    flag = true;
});

$('.return_btn').on('click', function(){
    $('.auth').toggleClass('flip');
    flag = false;
});

let btn = document.querySelector('.login');
let btn_bar = document.querySelector('.login-bar');
let close_btns = document.querySelectorAll(".close_btn");
var bg = document.querySelector('.bg');

function showBlock() {
    bg.classList.add('b-show');
}

function hideBlock() {
    bg.classList.remove('b-show');
    if (flag) {$('.auth').toggleClass('flip'); }
}

close_btns.forEach(function(close_btn){
    close_btn.addEventListener("click", hideBlock)
})
btn.addEventListener('click', showBlock);
btn_bar.addEventListener('click', showBlock);