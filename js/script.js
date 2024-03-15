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

let adresses = document.querySelectorAll(".adress")
let copyboard = document.querySelector(".copyboard")

adresses.forEach(function(adr){
  adr.addEventListener("click", function(){
    console.log("yes")
    navigator.clipboard.writeText(adr.innerHTML);
    copyboard.style.position = "fixed"
    copyboard.style.display = "flex";
    setTimeout(function(){
      copyboard.style.position = "none"
      copyboard.style.display = "none";
    }, 1000)
  })
});

jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});

let prices = {
  "Выберите..." : 0,
  "Эксперсс" : 1420,
  "Авиа" : 490,
  "Быстрое авто" : 220,
  "Авто" : 180,
  "ЖД" : 90,
  "Морем" : 45
}

let total_count = document.querySelector(".total_count");
let select__items = document.querySelectorAll(".select__item");
let inputs = document.querySelectorAll("input");
let delivery_type = document.querySelector(".select__head").innerHTML;

select__items.forEach(function(item){
  item.addEventListener("click", function(){
    delivery_type = item.querySelector(".type_name").innerHTML;
    total_count.innerHTML = `${prices[delivery_type] * parseInt(document.querySelector("#mass").value)} ₽`
  })
});

inputs.forEach(function(input){
  input.addEventListener("input", function(){
    total_count.innerHTML = `${prices[delivery_type] * parseInt(document.querySelector("#mass").value)} ₽`
  })
})