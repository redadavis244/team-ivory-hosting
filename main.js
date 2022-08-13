
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}


var cartSpan = document.getElementById("cart");
var currentCount = 0;




function plusOne(){
	currentCount += 1;

}
function plusTwo(){
	currentCount += 1;
// then make the variable count by 1
	if (currentCount > 1){
		// create an if statement saying that if the count is grateer than 1 then dont add it to the cart's innerhtml
		alert("this has been carted");
		cartSpan.innerHTML != currentCount;
	}
	// then if it is less than 1 add it to the carts inner html
	else{
		cartSpan.innerHTML = currentCount;
	}
}

window.addEventListener("load",function(){
	setTimeout(
		function open(event){
			document.querySelector(".popup").style.display = "block";
		},
		1000
	)
});
document.querySelector("#close").addEventListener("click",function(){
	document.querySelector(".popup").style.display = "none";
});
var user1 = document.getElementById("user-input1");
var user2 = document.getElementById("user-input2");
var username = document.getElementById("name");
username.innerHTML = user2.value;
function shut(){
	if ( user1.value == "" | user2.value == ""){
		user1.value = "";
		user2.value = "";
		alert
		("enter values");
	}
	else{
		document.querySelector("#close1").addEventListener("click",function(){
			document.querySelector(".popup").style.display = "none";
		});
	}
	username.innerHTML = user2.value;

}