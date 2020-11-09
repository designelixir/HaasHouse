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