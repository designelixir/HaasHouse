function open_mobileNav(open){
    if(open){
        document.getElementById('hamburger_close').style.display = "block";
        document.getElementById('hamburger_open').style.display = "none";
        document.getElementById('mobile_nav_wrapper').style.display = "block";
    } else {
        document.getElementById('hamburger_close').style.display = "none";
        document.getElementById('hamburger_open').style.display = "block";
        document.getElementById('mobile_nav_wrapper').style.display = "none";

    }
    
}


function triggerD(descriptionNumber,show){
    var trigger = document.getElementById(descriptionNumber);
    if (show) {
        trigger.style.display="block";

    } else {
        trigger.style.display="none";
    }
}

// open and close film window 
var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;
    if(clickFilm % 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin": "62.5% 31%", "transition": "all 1s ease-in-out"});
        $('#film-toggle-link').css("display", "block");
        $('#film-iframe').css("display", "none");
        $('#film-toggle-link').css("display", "block");
        $('.movie-nav').css("display", "none");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    } else {
        $('#the-body').css({"transform": "scale(5)", "transform-origin": "62.5% 31%", "transition": "all 1s ease-in-out"});
        $('#film-iframe').css("display", "block");
        $('#film-toggle-link').css("display", "none");
        $('.movie-nav').css("display", "block");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");


    }
});

//film screen navigation functionality 
var filmLinks = ["https://player.vimeo.com/video/487712165?title=0&byline=0&portrait=0", "https://player.vimeo.com/video/151901736?title=0&byline=0&portrait=0", "https://player.vimeo.com/video/97186301?title=0&byline=0&portrait=0"];
var currentVid = 0;
$('#film-iframe').attr("src", filmLinks[currentVid]); //set initial video 
//next button
$('#movie-nav-next').click(function(){
    if (currentVid === filmLinks.length -1 ){currentVid = -1;} //loops back 
    currentVid++;
    $('#film-iframe').attr("src", filmLinks[currentVid]);
});
//back button
$('#movie-nav-prev').click(function(){
    if(currentVid <= 0){currentVid = filmLinks.length;}
    currentVid--;
    $('#film-iframe').attr("src", filmLinks[currentVid]);
});



var tvSpreadContainer = document.getElementById('tv-spread-container');
var navigation = document.querySelectorAll(".nav-link");

function toggleWindow(window_id, toggleNumber){
var window = document.getElementById(window_id);

if (window.style.display === "block"){
    var open = true; 
    navigation.forEach(element => {
        element.style.color = "white";
        element.style.animation = 'fade-in 1.75s cubic-bezier(.39,.575,.565,1.000)';
        });
    window.style.display === 'none';
    tvSpreadContainer.classList.add('fade-in');
}
else {
    var open = false; 
    navigation.forEach(element => {
        element.style.color = "black";
        element.style.animation = 'fade-in 1.75s cubic-bezier(.39,.575,.565,1.000)'});
    window.style.display === 'block';
    tvSpreadContainer.classList.add('fade-out');
}
console.log('trigger: '+ open)
if (!open && toggleNumber === 1){
    window.classList.add("slide-in-left");
    console.log("triggered open about window")
} else if (!open && toggleNumber === 2){
    console.log('triggered open contact')
}

}


