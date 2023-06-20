const asidenavTag = document.querySelectorAll("header ul>li");

// aside navbar 나타나게 하기
 for(i=0; i<asidenavTag.length; i++) {
  asidenavTag[i].addEventListener("mouseover", function(){
    this.classList.add("open");
 });
}

for(i=0; i<asidenavTag.length; i++) {
  asidenavTag[i].addEventListener("mouseout", function(){
    this.classList.remove("open");
 });
}



//window.onload : 자바스크립트가 문서가 준비된 상황 이후 발동
window.onload = function(){
    const elm = document.querySelectorAll('.article');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next article
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // wheel up : move to previous article
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }