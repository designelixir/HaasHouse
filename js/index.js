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
var theBody = document.getElementById('the-body');


function zoomTV(tvName){
    var theBody = document.getElementById('the-body');
    var theTvContainer = document.getElementById('tv-spread-container');
    var zoomThisTV = document.getElementById(tvName)

//measure
    var bodyPosition = theBody.getBoundingClientRect();
    var tvContainerMeasure = theTvContainer.getBoundingClientRect();
    var tvPosition = zoomThisTV.getBoundingClientRect();
    console.log("tv container: "+ tvContainerMeasure.bottom +", "+tvContainerMeasure.left);
    console.log("targeted tv: "+ tvPosition.bottom +", "+tvPosition.left);
    console.log("body: "+ bodyPosition.bottom +", "+bodyPosition.left);
    theBody.style.transform = "scale(4,4)";
    console.log("after");
    console.log("tv container: "+ tvContainerMeasure.bottom +", "+tvContainerMeasure.left);
    console.log("targeted tv: "+ tvPosition.bottom +", "+tvPosition.left);
    console.log("body: "+ bodyPosition.bottom +", "+bodyPosition.left);
    
    
    // theTvContainer.style.bottom = tvPosition.left;
    
    
    theTvContainer.style.right = tvPosition.right / bodyPosition.right * 2;
    theTvContainer.style.top = (tvPosition.top);
    
}


 

var tv10 = document.getElementById('tv-10-btn');
//replace elementId with your element's Id.
// var rect = element.getBoundingClientRect();
// console.log("first" + rect.top);
// tv10.addEventListener('click', function(){
    

//     var element = document.getElementById('tv-10-btn');  
//     // 
//     var rect = element.getBoundingClientRect();
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     console.log( { top: rect.top + scrollTop, left: rect.left + scrollLeft });

//     theBody.style.marginLeft = -(rect.left + scrollLeft);
//     theBody.style.marginTop = -(rect.top + scrollTop);
//     theBody.style.transform = "scale(4,4)";
    
    
   
// })

// document.querySelector('video').playbackRate = 0.25;

// example use
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


