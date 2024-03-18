const anchor_btn = document.querySelector(".anchor_block")
anchor_btn.addEventListener('click', () => window.scrollTo({
  top: 0,
  behavior: 'smooth',
}));

let sto;

document.addEventListener("scroll", function(){
    clearTimeout(sto);
    var anchor = document.querySelector(".anchor_block");
    anchor.classList.remove("hide_anchor")
    anchor.classList.add("show_anchor")
    sto = setTimeout(function(){
        anchor.classList.add("hide_anchor")
        anchor.classList.remove("show_anchor")
    }, 500)
});