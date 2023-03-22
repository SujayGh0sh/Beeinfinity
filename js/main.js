// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

 // document.addEventListener('contextmenu', event => event.preventDefault()); //



 function myFunction() {
    var copyText = document.getElementById("myAnchor").title;
    var mockInput = document.createElement("input");
    document.body.appendChild(mockInput);
    mockInput.type = "text";
    mockInput.value = copyText;
    mockInput.style.opacity = 0;
    mockInput.style.position = "absolute";
    mockInput.style.top = "0px";
    mockInput.style.left = "0px";
    mockInput.select();
    document.execCommand("Copy");
    alert("Copied the Number ");
    mockInput.parentNode.removeChild(mockInput);
  }

  window.onload = function(){
    setTimeout(function(){
        var wrapper_preloader = document.getElementsByClassName("preloader")[0];
        wrapper_preloader.style.display = "none";
    },0.8)
}

