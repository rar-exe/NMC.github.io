let nav_btn = document.querySelector(".nav_btn");
let menu = document.querySelector(".menu_modal");
let menu_flag = true;

function show_hide_menu(){
    if (menu_flag){
        menu.classList.remove('menu-hide')
        nav_btn.classList.remove('btn-hide')
        menu.classList.add('menu-show')
        nav_btn.classList.add('btn-show')
        menu_flag = false;
    }else{
        menu.classList.add('menu-hide')
        nav_btn.classList.add('btn-hide')
        menu.classList.remove('menu-show')
        nav_btn.classList.remove('btn-show')
        menu_flag = true;
    }
}

nav_btn.addEventListener("click", show_hide_menu);
window.addEventListener("click", function(event){
    if (event.target == menu) {
        show_hide_menu()
    }
});