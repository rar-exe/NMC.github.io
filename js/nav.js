let nav_btn = document.querySelector(".nav_btn");
let menu = document.querySelector(".hamburger-menu");
let menu_flag = false;
nav_btn.addEventListener("click", function(){
    if (menu_flag==false){
        menu.classList.add('menu-show')
        nav_btn.classList.add('btn-show')
        menu_flag = true;
    }else{
        menu.classList.add('menu-hide')
        nav_btn.classList.add('btn-hide')
        menu_flag = false;
    }
})