document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('[data-mask="phone"]')
  if (!elements) return
    const phoneOptions = {
      mask: '+0(000)000-00-00',
    }
  elements.forEach(el => {
    IMask(el, phoneOptions)
  })
})

let adress = document.querySelectorAll(".adress")

adress.forEach(function(adr){
  adr.addEventListener("click", function(){
    navigator.clipboard.writeText(adr.innerHTML);
  })
});