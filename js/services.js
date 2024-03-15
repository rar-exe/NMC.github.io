let left_arrow = document.querySelector(".left_arrow_slide_photo");
let right_arrow = document.querySelector(".right_arrow_slide_photo");
let photo = document.querySelector(".slide_photo__photo > div");

let current_photo = 1;

let photos = ['url("../img/back_delivery_photo.jpg")','url("../img/delivery_photo.jpg")','url("../img/next_delivery_photo.jpg")']

function photo_back(){
    photo.classList.remove("change_photo_show");
    photo.classList.add("change_photo");
    setTimeout(function(){
        photo.style.backgroundImage = photos[current_photo-1];
        photo.classList.add("change_photo_show");
        photo.classList.remove("change_photo");
        if (current_photo > 0){ current_photo-- }
    },300)
}

function photo_next(){
    photo.classList.remove("change_photo_show");
    photo.classList.add("change_photo");
    setTimeout(function(){
        photo.style.backgroundImage = photos[current_photo+1];
        photo.classList.add("change_photo_show");
        photo.classList.remove("change_photo");
        if (current_photo < photos.length-1){ current_photo++ }
    },300)
}

left_arrow.addEventListener("click", photo_back)
right_arrow.addEventListener("click", photo_next)