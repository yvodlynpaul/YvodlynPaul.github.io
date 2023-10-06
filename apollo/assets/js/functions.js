$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


const slides = document.querySelectorAll(".banner li")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
var map = L.map('map').setView([51.505, -0.09], 13);
let counter = 0

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

nextBtn.addEventListener("click",function(){
    counter++
    carousel()
})
prevBtn.addEventListener("click",function(){
    counter--
    carousel()
})

function carousel(){
	if (counter === slides.length){
        counter = 0
    }
    if (counter <= 0){
        counter = slides.length-1
    }
	if (!slides[0].classList.contains("li1")){
		slides[0].classList.remove("active")
		slides[1].classList.remove("active")
		slides[2].classList.remove("active")
	} else if (!slides[1].classList.contains("active")){
		slides[0].classList.remove("active")
		slides[1].classList.add("active")
		slides[2].classList.remove("active")
	} else if (!slides[2].classList.contains("active")){
		slides[0].classList.remove("active")
		slides[1].classList.remove("active")
		slides[2].classList.add("active")
	} else if (!slides[0].classList.contains("active")){
		slides[0].classList.add("active")
		slides[1].classList.remove("active")
		slides[2].classList.remove("active")
	}
	/* for (let i = 0; i < slides.length; i++) {
		
		// const element = array[index];
		// if (slides[i].classList.contains("active") && counter === i){
		// 	slides[i].classList.remove("active")
		// }else{
		// 	slides[i].classList.add("active")
		// }
		if (slides[i].classList.contains("li1") ){
			slides[i].classList.contains("l")
		}

	} */

	/* /* slides.forEach(function (slide) {
        slide.classList.remove("active");
		if (!slide.classList.contains("active"))
			slide.classList.add("active");
		else
			slide.classList.remove("active");

    });  */
}