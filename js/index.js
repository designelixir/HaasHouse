

// open and close film window 
var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;
    if(clickFilm % 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin": "62.5% 31%"});
        $('#film-toggle-link').css("display", "block");
        $('#film-iframe').css("display", "none");
        $('#film-toggle-link').css("display", "block");
        $('.movie-nav').css("display", "none");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    } else {
        $('#the-body').css({"transform": "scale(5)", "transform-origin": "62.5% 31%"});
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



var clickPhoto = 0;
$('.photo-toggle-link').click(function(){
    console.log("clicked tv-5-link");
    clickPhoto++;
    if(clickPhoto% 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin": "62.5% 31%"});
        $('#tv-5-link').css("display", "block");
        $('.photo-frame-wrapper').css("display", "none");
        $('#tv-5-nav').css("display", "none");
        $('#targeted-picture').removeAttr("src");
        $('#no-signal').css("display", "none");
        $('.tv-5').css("background-color", "black")

        $('.tv-5').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    } else {
        $('#the-body').css({"transform": "scale(5)", "transform-origin": "17% 55%"});
        $('#tv-5-link').css("display", "none");
        $('.photo-frame-wrapper').css("display", "block");
        $('#tv-5-nav').css("display", "block");
        $('.tv-5').css({"animation": "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both", "background-color": "gray"});

    }
});

var peopleCollection = ["src/casey-portrait.jpeg", "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/kmkrsltibnrzrsubcgvd/will-smith", "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/07/MER9673f0f77451bb620d8210bf2cfa4_bravo0706-1024x684.jpg"]
var placesCollection = ["https://ewscripps.brightspotcdn.com/dims4/default/3a54f41/2147483647/strip/true/crop/2038x1146+5+216/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F26%2F12%2Fa6f367014ff6bd297b8b2fbe3c6e%2Fandrew-plutt.jpg", "https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/d/e5/de52bca7-16bc-5b16-8c06-b05e593ff698/5eecdc1b7713c.image.jpg?crop=1254%2C705%2C0%2C65&resize=1254%2C705&order=crop%2Cresize", "https://s1.it.atcdn.net/wp-content/uploads/2019/11/Colorado-road-trip-hero-800x600.jpg", "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME"]
var thingsCollection = ["https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/things-to-write-about-760x400.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/07/tt-1-76.jpg", "https://cambridgewords.files.wordpress.com/2019/04/obvious_300x200.jpg?w=640", "https://www.howsweeteats.com/wp-content/uploads/2019/10/IMG_8425.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/03/tt-1-59.jpg", "https://assets.londonist.com/uploads/2018/05/i875/rainbow.jpg"]





$('.channel').click(function(){
    $('.photo-frame-wrapper').css("display", "none");
    var activeCategory = [];

    if($(this).index() === 0){activeCategory = peopleCollection; }
    else if($(this).index()===1){activeCategory = placesCollection; }
    else if($(this).index()===2){activeCategory = thingsCollection;}

    var categoryChannelCount = activeCategory.length;
    
    $('#targeted-picture').attr("src", activeCategory[0]);
    var channelSwitch = 1;
    $('#channel-switch').click(function(){        
        var rotateThisMuch = channelSwitch * (360/13);
        
        console.log("channel switch: "+channelSwitch);
        if (channelSwitch < categoryChannelCount) {
            $('#channel-switch-img').css('transform', 'rotate('+rotateThisMuch+'deg)')

            $('#targeted-picture').attr("src", activeCategory[channelSwitch]);
    

        } else { 
            channelSwitch = -1; 
            $('#channel-switch-img').css('transform', 'rotate('+rotateThisMuch+'deg)')
    
        }
        channelSwitch++;
    
    });

})



function triggerD(descriptionNumber,show){
    var trigger = document.getElementById(descriptionNumber);
    if (show) {
        trigger.style.display="block";

    } else {
        trigger.style.display="none";
    }
}

$('#photo-guide-close').click(function(){
    $('.photo-frame-wrapper').css("display", "none");
    $('#no-signal').css("display", "block");
    $('#targeted-picture').attr("src", "src/statics/gray-line-static.gif")

})

$('.open-guide').click(function(){
    $('.photo-frame-wrapper').css("display", "block");
    $('#no-signal').css("display", "none");
    $('#targeted-picture').removeAttr("src");

})
