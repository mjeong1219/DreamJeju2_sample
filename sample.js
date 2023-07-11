var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var current = 0;
showSlide(current);
prev.onclick = prevSlide;
next.onclick = nextSlide;

function showSlide(n){
    for (var i = 0 ; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
}

function prevSlide(){
    if(current>0) current -= 1;
    else current = slides.length - 1;
    showSlide(current);
}

function nextSlide(){
    if(current < slides.length -1) current += 1;
    else current = 0;
    showSlide(current);
}

// 탭메뉴
var topMenu = document.getElementById("topMenu");
var menuItems = document.getElementsByTagName("li"); // li가 태그 이름이기 때문에 byTagName.
// 이벤트 핸들러 함수 정의
function toggleSubMenu(){
    var subMenu = this.getElementsByTagName("ul")[0];
    if(subMenu.style.display === "block"){
        subMenu.style.display = "none";
    }else{
        subMenu.style.display = "block";
    }
}
// 메뉴 아이템에 이벤트 핸들러 추가
for(var i = 0 ; i < menuItems.length ; i++){
    if(menuItems[i].getElementsByTagName("ul").length > 0){
        menuItems[i].addEventListener("click", toggleSubMenu);
    }
}