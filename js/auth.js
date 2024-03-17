function clear_input(){
    let inpts = document.querySelectorAll("input");
    inpts.forEach(function(inpt){
        inpt.value = "";
    })
}

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
    clear_input()
}

close_btns.forEach(function(close_btn){
    close_btn.addEventListener("click", hideBlock)
})
btn.addEventListener('click', showBlock);
btn_bar.addEventListener('click', showBlock);

window.onclick = function(event) {
    if (event.target == bg) {
        hideBlock()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('[data-mask="phone"]')
    if (!elements) return
      const phoneOptions = {
        mask: '+7(000)000-00-00',
      }
    elements.forEach(el => {
      IMask(el, phoneOptions)
    })
  })

function togglePWLogin(){
    document.querySelector('.login_eye').classList.toggle('slash');
    var password = document.querySelector('.login_pass');
    if(password.getAttribute('type') === 'password'){
      password.setAttribute('type', 'text');
    } else {
      password.setAttribute('type', 'password');
    }
  }

function togglePWReg(){
    document.querySelector('.reg_eye').classList.toggle('slash');
    var password = document.querySelector('.reg_pass');
    if(password.getAttribute('type') === 'password'){
      password.setAttribute('type', 'text');
    } else {
      password.setAttribute('type', 'password');
    }
  }