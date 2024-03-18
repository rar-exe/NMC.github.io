let reg_flag_pass = false;
let log_flag_pass =false;

function clear_input(){
    let inpts = document.querySelectorAll("input");
    inpts.forEach(function(inpt){
        inpt.value = "";
    })
    if (log_flag_pass){
        document.querySelector('.login_eye').classList.toggle('slash');
        var password = document.querySelector('.login_pass');
        password.setAttribute('type', 'password');
    }

    if (reg_flag_pass){
        document.querySelector('.reg_eye').classList.toggle('slash');
        var password = document.querySelector('.reg_pass');
        password.setAttribute('type', 'password');
    }
    reg_flag_pass = false;
    log_flag_pass =false;
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
  log_flag_pass = !log_flag_pass
  document.querySelector('.login_eye').classList.toggle('slash');
  var password = document.querySelector('.login_pass');
  if(password.getAttribute('type') === 'password'){
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
}

function togglePWReg(){
  reg_flag_pass = !reg_flag_pass
  document.querySelector('.reg_eye').classList.toggle('slash');
  var password = document.querySelector('.reg_pass');
  if(password.getAttribute('type') === 'password'){
    password.setAttribute('type', 'text');
  } else {
    password.setAttribute('type', 'password');
  }
}

$(".login_pass").keyup(function(event) {
  if (event.keyCode === 13) {
    $(".log_in_btn").click();
  }
});

$(".user_login").keyup(function(event) {
  if (event.keyCode === 13) {
    $(".log_in_btn").click();
  }
});

let login_button = document.querySelector(".log_in_btn");
login_button.addEventListener("click",function(){
  console.log("You authorizate")
})

$(".reg_email").keyup(function(event) {
  if (event.keyCode === 13) {
    $(".reg_btn").click();
  }
});

$(".reg_tel").keyup(function(event) {
  if (event.keyCode === 13) {
    $(".reg_btn").click();
  }
});

$(".reg_pass").keyup(function(event) {
  if (event.keyCode === 13) {
    $(".reg_btn").click();
  }
});

let reg_button = document.querySelector(".reg_btn");
reg_button.addEventListener("click",function(){
  console.log("You registred")
})