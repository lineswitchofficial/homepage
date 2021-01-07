const togglebtn = document.querySelector('.navbar_togglebtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

togglebtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

$("#sidebar-toggle").click(function(){
    $("html").toggleClass("open");


jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});
});


