let menu = document.querySelector("#menubtn");
let navbar= document.querySelector(".navbar");

menu.onclick =() =>{
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll(".slide-container");
let index = 0;

function prev(){
    slides[index].classList.remove('active');
    index = (index-1 + slides.length)%slides.length;
    slides[index].classList.add('active')
}
function next(){
    slides[index].classList.remove('active');
    index = (index +1 )%slides.length;
    slides[index].classList.add('active')
}
var addItemId = 0;
function addToCart(){
    addItemId +=1
    var selecteditem = document.createElement('div');
    selecteditem.classList.add('cartImg');
    selecteditem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',children[0].currentSrc);
    var cartItems = document.getElementsById('cartbox');
    selecteditem.append(img);
    cartItems.append(selecteditem);
}