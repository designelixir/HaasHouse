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

var films_btn = document.getElementById('films_button');
var television_wrapper = document.getElementById('television_wrapper');
var television_grid_container = document.getElementById('tv-grid-container');

var close_films_button = document.getElementById('close-films');

films_btn.addEventListener('click', function(){
    console.log('clicked');
    close_films_button.style.display = 'block';
    television_wrapper.style.transform = 'scale(3,3)';
    television_grid_container.style.transform = 'translate(-10%, -40%)';
})

close_films_button.addEventListener('click', function(){
    television_wrapper.style.transform = 'scale(1,1)';
    television_grid_container.style.transform = 'translate(0%, 0%)';
    close_films_button.style.display = 'none';
})

var photos_window = document.getElementById('photos-window');
var photos_link = document.getElementById('photos-link');
photos_link.addEventListener('click', function(){
    photos_window.style.display = "block";
})

var close_photos_window = document.getElementById('close-photos-window');
close_photos_window.addEventListener('click', function(){
    photos_window.style.display = "none";
})
