
// theFilmWindow = document.getElementById('tv-11');
// var measureFilmWindow = theFilmWindow.getBoundingClientRect();
// console.log(measureFilmWindow.top);

// let originX = (10 * (measureFilmWindow.left/window.innerWidth * 100)) / 5, 
// originY = (10 * (measureFilmWindow.top/window.innerHeight * 100)) / 5;

// open and close film window 
var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;
    var tv11 = document.getElementById('tv-11').getBoundingClientRect();

    if(clickFilm % 2 === 0){

        $('#the-body').css({"transform": "scale(1)", "transform-origin-x": (tv11.right -100), "transform-origin-y": (tv11.top + 50)});
        $('#film-toggle-link').css("display", "block");
        $('#film-iframe').css("display", "none");
        $('#film-toggle-link').css("display", "block");
        $('.movie-nav').css("display", "none");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
        // $('#film-iframe').removeAttr("src");
        $('#tv-11-screen').css({'background-color': '#1e1e1e'})

        

    } else {
        $('#the-body').css({"transform": "scale(4)", "transform-origin-x": (tv11.right -100), "transform-origin-y": (tv11.top + 50)});
        $('#film-iframe').css("display", "block");
        $('#film-toggle-link').css("display", "none");
        $('.movie-nav').css("display", "block");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    }
});

//film screen navigation functionality 
var filmLinks = ["https://player.vimeo.com/video/494815946?quality=1080p", "https://player.vimeo.com/video/494873166?quality=1080p"];
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
    clickPhoto++;
    var tv5 = document.getElementById('tv-5').getBoundingClientRect();

    if(clickPhoto% 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin-x": (tv5.right - 50), "transform-origin-y": (tv5.bottom)});
        $('#tv-5-link').css("display", "block");
        $('.photo-frame-wrapper').css("display", "none");
        $('#tv-5-nav').css("display", "none");
        $('#no-signal').css("display", "none");

        $('.tv-5').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    } else {
        $('#the-body').css({"transform": "scale(4)", "transform-origin-x": (tv5.left), "transform-origin-y": (tv5.top + 75 )});
        $('#tv-5-link').css("display", "none");
        $('.photo-frame-wrapper').css("display", "block");
        $('#tv-5-nav').css("display", "block");

    }
});

var peopleCollection = ["src/people/one.jpg", "src/people/two.jpg", "src/people/three.jpg", "src/people/four.jpg", "src/people/five.jpg", "src/people/six.jpg", "src/people/seven.jpg" , "src/people/eight.jpg" , "src/people/nine.jpg"  ]
var peopleCollectionDescript = ['35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>AMY EHARA<br/> Pacifica, CA', '35mm <br/>MCKENNA KOLEDO <br/> Pacific Palisades, CA', '35mm <br/>LONE PADDLEBOARDER <br/> Mavericks Beach, CA', '35mm <br/>MIKE CHAMBERLAIN<br/> Half Moon Bay, CA', '35mm <br/>EMMA DEVINCENZI <br/> San Francisco, CA', '35mm <br/>EMMA DEVINCENZI<br/> San Francisco, CA', '35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>LAWRENCE RICKFORD<br/> Pacifica, CA' ]

var placesCollection = ["src/places/one.jpg", "src/places/two.jpg", "src/places/three.jpg", "src/places/four.jpg", "src/places/five.jpg", "src/places/six.jpg", "src/places/seven.jpg", "src/places/eight.jpg", "src/places/nine.jpg", "src/places/ten.jpg", "src/places/eleven.jpg" ]
var placesCollectionDescript = ['35mm <br/> Davenport, CA', '35mm <br/> Pigeon Point Lighthouse, CA', '35mm <br/> San Francisco, CA', '35mm <br/>Manhattan Beach, CA', '35mm <br/>Coroico, Bolivia', '35mm <br/>Davenport, CA', '35mm <br/>Pacific Ocean', '35mm <br/>San Francisco, CA', '35mm <br/>Foster City, CA', '35mm <br/> Pigeon Point Lighthouse', '35mm <br/> MARINA DISTRICT <br/> San Francisco, CA' ]

var thingsCollection = ["src/things/one.jpg", "src/things/two.jpg", "src/things/three.jpg", "src/things/four.jpg"]
var thingsCollectionDescript = ['35mm <br/>PALANCE OF FINE ARTS <br/> San Francisco, CA', '35mm <br/> ATLAS GENUS CONCERT <br/> Boulder, CO', '35mm <br/>MARINA DISTRICT <br/> San Francisco, CA', '35mm <br/>PALACE OF FINE ARTS <br/> San Francisco, CA'  ]

var fullPhotoCollection = [].concat(peopleCollection, placesCollection, thingsCollection);
var fullPhotoDescript = [].concat(peopleCollectionDescript, placesCollectionDescript, thingsCollectionDescript)




$('.channel').click(function(){
    $('.photo-frame-wrapper').css("display", "none");
    var activeCategory = [];
    var activeDescript = [];

    if ($(this).attr("id") == "photo-guide-close"){activeCategory = fullPhotoCollection; activeDescript = fullPhotoDescript }
    else if($(this).index() === 0){activeCategory = peopleCollection; activeDescript = peopleCollectionDescript }
    else if($(this).index()===1){activeCategory = placesCollection; activeDescript = placesCollectionDescript}
    else if($(this).index()===2){activeCategory = thingsCollection; activeDescript = thingsCollectionDescript}

    var categoryChannelCount = activeCategory.length;
    
    $('#targeted-picture').attr("src", activeCategory[0]);
    $('#photo-description').html(activeDescript[0])
    var channelSwitch = 1;
    $('#channel-switch').click(function(){        
        var rotateThisMuch = channelSwitch * (360/13);
        if (channelSwitch < categoryChannelCount) {
            $('#channel-switch-img').css('transform', 'rotate('+rotateThisMuch+'deg)')
            $('#targeted-picture').attr("src", activeCategory[channelSwitch]);
            $('#targeted-picture').css("animation","fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both")
            $('#photo-description').html([activeDescript[channelSwitch]])        
        } else {
            channelSwitch = 0;
            $('#targeted-picture').attr("src", activeCategory[channelSwitch]);
            $('#photo-description').html(activeDescript[channelSwitch]);
            $('#channel-switch-img').css('transform', 'rotate(0deg)')
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



$('.open-guide').click(function(){
    $('.photo-frame-wrapper').css("display", "block");
    $('#no-signal').css("display", "none");

})

// DESIGN TV ###########################

$('#designs-link').click(function(){
    var tv3 = document.getElementById('tv-3-designs').getBoundingClientRect();

    $('#the-body').css({"transform": "scale(4)", "transform-origin-x": (tv3.right - 75), "transform-origin-y": (tv3.bottom)});
    $('#designs-link').css("display", "none");
    $('.design-tv-guide').css("display", "block");
    $('.tv-3-nav').css("display", "block");
    // $('#tv-3-bg-target').attr("src", "src/black.png");
    
})

$('#design-power-off').click(function(){
    $('#the-body').css({"transform": "scale(1)"});
    $('#designs-link').css("display", "block");
    $('.design-tv-guide').css("display", "none");
    $('.tv-3-nav').css("display", "none");
    $('.tv-3-screen').css ("background", "#1e1e1e")
    

})

$('#film-guide-close').click(function(){
    $('.design-tv-guide').css("display", "none");
    $('#tv-3-bg').css("background-color", "#1e1e1e");
    $('#tv-3-bg-target').attr("src", "src/statics/gray-static.gif");

})

$('#design-tv-guide-button').click(function(){
    $('.design-tv-guide').css("display", "block");
    $('#tv-3-bg').css("background-color", "#1e1e1e");
    $('#tv-3-bg-target').attr("src", "src/statics/gray-static.gif");

})


var webCollection = ["src/casey-portrait.jpeg", "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/kmkrsltibnrzrsubcgvd/will-smith", "https://s3.amazonaws.com/sfc-datebook-wordpress/wp-content/uploads/sites/2/2020/07/MER9673f0f77451bb620d8210bf2cfa4_bravo0706-1024x684.jpg"]
var webCollectionDescript = ["project one", "project two", "project three"]

var printCollection = ["https://ewscripps.brightspotcdn.com/dims4/default/3a54f41/2147483647/strip/true/crop/2038x1146+5+216/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F26%2F12%2Fa6f367014ff6bd297b8b2fbe3c6e%2Fandrew-plutt.jpg", "https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/d/e5/de52bca7-16bc-5b16-8c06-b05e593ff698/5eecdc1b7713c.image.jpg?crop=1254%2C705%2C0%2C65&resize=1254%2C705&order=crop%2Cresize", "https://s1.it.atcdn.net/wp-content/uploads/2019/11/Colorado-road-trip-hero-800x600.jpg", "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME"]
var printCollectionDescript = ["project 1", "project 2", "project 3", "project 4"]

var filmCollection = ["https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/things-to-write-about-760x400.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/07/tt-1-76.jpg", "https://cambridgewords.files.wordpress.com/2019/04/obvious_300x200.jpg?w=640", "https://www.howsweeteats.com/wp-content/uploads/2019/10/IMG_8425.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/03/tt-1-59.jpg", "https://assets.londonist.com/uploads/2018/05/i875/rainbow.jpg"]
var filmCollectionDescript = ["project #1", "project #2", "project #3", "project #4", "project #5", "prokect # 6"]

var fullDesignCollection = [].concat(webCollection, printCollection, filmCollection);
var fullDesignDescript = [].concat(webCollectionDescript, printCollectionDescript, filmCollectionDescript)



$('.channels').click(function(){
    $('.design-tv-guide').css("display", "none");
    var activeCategory = [];
    var activeDescript = [];

    if ($(this).attr("id") == "design-guide-close"){activeCategory = fullDesignCollection; activeDescript = fullDesignDescript }
    else if($(this).index() === 0){activeCategory = webCollection; activeDescript = webCollectionDescript }
    else if($(this).index()===1){activeCategory = printCollection; activeDescript = printCollectionDescript}
    else if($(this).index()===2){activeCategory = filmCollection; activeDescript = filmCollectionDescript}

    var categoryChannelCount = activeCategory.length;
    
    $('#tv-3-bg-target').attr("src", activeCategory[0]);
    $('#design-description').html(activeDescript[0])
    var current = 0;

    //next button
    $('#design-nav-forward').click(function(){
        current++;
        if ((current) >= categoryChannelCount ){  //loops back 
            current = 0; 
            $('#tv-3-bg-target').attr("src", activeCategory[current]);
            $('#design-description').html(activeDescript[current]);
        }
        $('#tv-3-bg-target').attr("src", activeCategory[current]);
        $('#design-description').html(activeDescript[current]);

        console.log(current);
    });
    //back button
    $('#design-nav-backward').click(function(){
        current--;
        console.log("TRIGGERRRRR" + current)
        if (current <= 0){
            
            console.log('targeted')
             
            $('#tv-3-bg-target').attr("src", activeCategory[categoryChannelCount]);
            $('#design-description').html(activeDescript[categoryChannelCount]);
            current = categoryChannelCount;
        } else {
            $('#tv-3-bg-target').attr("src", activeCategory[current]);
            $('#design-description').html(activeDescript[current]);
        }
        
        
        
    });
        

    })


var aboutClickCount = 0;
$('.about-link').click(function(){
    if(aboutClickCount % 2 === 0){
        $('#about-window').css({"display": "block", "animation": "tilt-in-fwd-tl .6s cubic-bezier(.25,.46,.45,.94) both"})
        $('.about-link').text('X');
        $('.about-link').css("color", "black")
        $('#haas-house').css({"color": "black"})
        

    } else {
        $('#about-window').css({ "animation": "slide-out-br .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.about-link').text('ABOUT');
        $('.about-link').css("color", "white")
        $('#haas-house').css({"color": "white"})
        
    }
    aboutClickCount++;
})

var contactClickCount = 0; 
$('.contact-link').click(function(){
    if(contactClickCount % 2 === 0){
        $('#contact-window').css({"display": "block", "animation": "tilt-in-fwd-tr .6s cubic-bezier(.25,.46,.45,.94) both"})
        $('.contact-link').text('X');
        $('.contact-link').css("color", "black")
        $('#haas-house').css({"color": "black"})
        
    } else {
        $('#contact-window').css({ "animation": "slide-out-bl .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.contact-link').text('CONTACT');
        $('.contact-link').css("color", "white")
        $('#haas-house').css({"color": "white"})
        
        
    }
    contactClickCount++;
    
})