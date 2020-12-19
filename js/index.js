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

var photo_tv = document.getElementById('photo-tv');
var television_wrapper = document.getElementById('tv-container-wrapper');
var tv_container = document.getElementById('tv-container');

photo_tv.addEventListener('click', function(){
    television_wrapper.style.animation = "scale-in 0.25s both";
    // television_wrapper.style.marginLeft = "140%";
    document.getElementById('photo-tv').style.display="none";
    document.getElementById('happening-container').style.display="block";
})

var tv_guide_close_btn = document.getElementById('tv-guide-close-btn');

tv_guide_close_btn.addEventListener('click', function(){
    television_wrapper.style.animation = "scale-out 0.25s both";
    television_wrapper.style.marginLeft = "0%";
    document.getElementById('photo-tv').style.display="block";
    document.getElementById('happening-container').style.display="none";
})

var tv_link = document.getElementById('film-link');

tv_link.addEventListener('click', function(){
    television_wrapper.style.transform = "scale(4,4)";
    television_wrapper.style.margin = "80% 0% 0% 10%";

    tv_link.style.display = "none";
    document.getElementById('film-tv').style.backgroundImage ="url('/assets/src/projector.jpg')";

})






// var films_btn = document.getElementById('films_button');
// var television_grid_container = document.getElementById('tv-grid-container');

// var close_films_button = document.getElementById('close-films');

// films_btn.addEventListener('click', function(){
//     console.log('clicked');
//     close_films_button.style.display = 'block';
//     television_wrapper.style.transform = 'scale(3,3)';
//     television_grid_container.style.transform = 'translate(-10%, -40%)';
// })

// close_films_button.addEventListener('click', function(){
//     television_wrapper.style.transform = 'scale(1,1)';
//     television_grid_container.style.transform = 'translate(0%, 0%)';
//     close_films_button.style.display = 'none';
// })

// var photos_window = document.getElementById('photos-window');
// var photos_link = document.getElementById('photos-link');
// photos_link.addEventListener('click', function(){
//     photos_window.style.display = "block";
// })

// var close_photos_window = document.getElementById('close-photos-window');
// close_photos_window.addEventListener('click', function(){
//     photos_window.style.display = "none";
// })

// function triggerD(descriptionNumber,show){
//     var trigger = document.getElementById(descriptionNumber);
//     if (show) {
//         trigger.style.display="block";

//     } else {
//         trigger.style.display="none";
//     }
// }