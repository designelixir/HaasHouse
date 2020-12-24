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


function zoomTV(tvNumber){
    var theBody = document.getElementById('the-body');

    if(tvNumber === 1){
        theBody.style.transform = "scale(5,5)";
        theBody.style.transformOrigin = '62.5% 31%';
        document.getElementById('films-link').style.display = 'none';
        document.getElementById('films-window').style.display = 'block';
        document.getElementById('tv-11-bg').style.display = "none";
        document.getElementById('tv-11-bg-2').style.display = 'block';
    }

    else if(tvNumber === 2){
        theBody.style.transform = "scale(5,5)";
        theBody.style.transformOrigin = '17% center';
        document.getElementById('tv-5-link').style.display = "none";
        document.getElementById('tv-5-box').style.display = "block";
    }

    else if(tvNumber === 3){
        theBody.style.transform = "scale(6,6)";
        theBody.style.transformOrigin = '60% 78%';
        document.getElementById('tv-3-link').style.display = "none";
    }
    

}

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


