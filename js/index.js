var thisScale = 4;
var thisMultiplier = .4;


var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;
    var filmCONTAINER = document.getElementById('film').getBoundingClientRect();
    var bodymeasure = document.getElementById('the-body').getBoundingClientRect();
    if(clickFilm % 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin-x": (filmCONTAINER.right -100), "transform-origin-y": (filmCONTAINER.top + 50)});
        $('#film-link').css("display", "block");
        $('#film-iframe').css("display", "none");
        $('.movie-nav').css("display", "none");
    } else {
        $('#the-body').css({"transform": "scale("+thisScale+")", "transform-origin-x": filmCONTAINER.x * (thisScale * (thisMultiplier)), "transform-origin-y": filmCONTAINER.y});
        $('#film-iframe').css("display", "block");
        $('#film-link').css("display", "none");
        $('.movie-nav').css("display", "block");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    }
});


var mobileClickFilm = 0; 
$('.film-link-mobile').click(function(){
    mobileClickFilm++;
    var tv11mobile = document.getElementById('film-mobile-tv').getBoundingClientRect();

    if(mobileClickFilm % 2 === 0){
        console.log('yeah')
    } else {
        $('#the-body').css({"transform": "scale(3.75)", "transform-origin-x": (tv11mobile.left + 85), "transform-origin-y": (tv11mobile.top + 100)});
        $('.mobile-tv-window-navigation').css({"bottom": (tv11mobile.bottom - 100)})
    }
    console.log(tv11mobile)

    console.log('clicky')
})


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
    
    var tv5 = document.getElementById('photo-tv').getBoundingClientRect();

    if(clickPhoto% 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin-x": (tv5.right - 50), "transform-origin-y": (tv5.bottom)});
        $('#tv-5-link').css("display", "block");
        $('#photo-bg-target').attr("src", "src/black.svg")
        $('#photo-tv-guide').css({"display": "none"})
        $('.photo-tv-nav').css({"display": "none"})
    } else {
        
        $('#the-body').css({"transform": "scale(" + thisScale +")", "transform-origin-x": (tv5.left), "transform-origin-y": (tv5.top + 75 )});
        $('#tv-5-link').css("display", "none");
        $('#photo-bg-target').attr("src", "src/statics/gray-static-stationary.png")
        $('#photo-tv-guide').css({"display": "block"})
        $('.photo-tv-nav').css({"display": "block"})


    }
});

var peopleCollection = ["src/People/one.jpg", "src/People/two.jpg", "src/People/three.jpg", "src/People/four.jpg", "src/People/five.jpg", "src/People/six.jpg", "src/People/seven.jpg" , "src/People/eight.jpg" , "src/People/nine.jpg"  ]
var peopleCollectionDescript = ['35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>AMY EHARA<br/> Pacifica, CA', '35mm <br/>MCKENNA KOLEDO <br/> Pacific Palisades, CA', '35mm <br/>LONE PADDLEBOARDER <br/> Mavericks Beach, CA', '35mm <br/>MIKE CHAMBERLAIN<br/> Half Moon Bay, CA', '35mm <br/>EMMA DEVINCENZI <br/> San Francisco, CA', '35mm <br/>EMMA DEVINCENZI<br/> San Francisco, CA', '35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>LAWRENCE RICKFORD<br/> Pacifica, CA' ]

var placesCollection = ["src/Places/one.jpg", "src/Places/two.jpg", "src/Places/three.jpg", "src/Places/four.jpg", "src/Places/five.jpg", "src/Places/six.jpg", "src/Places/seven.jpg", "src/Places/eight.jpg", "src/Places/nine.jpg", "src/Places/ten.jpg", "src/Places/eleven.jpg" ]
var placesCollectionDescript = ['35mm <br/> Davenport, CA', '35mm <br/> Pigeon Point Lighthouse, CA', '35mm <br/> San Francisco, CA', '35mm <br/>Manhattan Beach, CA', '35mm <br/>Coroico, Bolivia', '35mm <br/>Davenport, CA', '35mm <br/>Pacific Ocean', '35mm <br/>San Francisco, CA', '35mm <br/>Foster City, CA', '35mm <br/> Pigeon Point Lighthouse', '35mm <br/> MARINA DISTRICT <br/> San Francisco, CA' ]

var thingsCollection = ["src/Things/one.jpg", "src/Things/two.jpg", "src/Things/three.jpg", "src/Things/four.jpg"]
var thingsCollectionDescript = ['35mm <br/>PALACE OF FINE ARTS <br/> San Francisco, CA', '35mm <br/> ATLAS GENUS CONCERT <br/> Boulder, CO', '35mm <br/>MARINA DISTRICT <br/> San Francisco, CA', '35mm <br/>PALACE OF FINE ARTS <br/> San Francisco, CA'  ]

var fullPhotoCollection = [].concat(peopleCollection, placesCollection, thingsCollection);
var fullPhotoDescript = [].concat(peopleCollectionDescript, placesCollectionDescript, thingsCollectionDescript)




$('.photo-channel').click(function(){
    $('#photo-tv-guide').css("display", "none");
    var activeCategory = [];
    var activeDescript = [];

    if ($(this).attr("id") == "photo-guide-close"){activeCategory = fullPhotoCollection; activeDescript = fullPhotoDescript }
    else if($(this).index() === 0){activeCategory = peopleCollection; activeDescript = peopleCollectionDescript }
    else if($(this).index()===1){activeCategory = placesCollection; activeDescript = placesCollectionDescript}
    else if($(this).index()===2){activeCategory = thingsCollection; activeDescript = thingsCollectionDescript}

    var categoryChannelCount = activeCategory.length;
    
    $('#photo-bg-target').attr("src", activeCategory[0]);
    $('#photo-project-description').html(activeDescript[0])
    var channelSwitch = 1;
    $('#channel-switch-img').click(function(){        
        var rotateThisMuch = channelSwitch * (360/13);
        if (channelSwitch < categoryChannelCount) {
            $('#channel-switch-img').css('transform', 'rotate('+rotateThisMuch+'deg)')
            $('#photo-bg-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]])        
        } else {
            channelSwitch = 0;
            $('#photo-bg-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html(activeDescript[channelSwitch]);
            $('#channel-switch-img').css('transform', 'rotate(0deg)')
        }
        channelSwitch++;
    });
})

$('#photo-tv-guide-btn').click(function(){
    $('#photo-tv-guide').css({"display": "block"});
})



function triggerD(descriptionNumber,show){
    var trigger = document.getElementById(descriptionNumber);
    if (show) {
        trigger.style.display="block";

    } else {
        trigger.style.display="none";
    }
}



// DESIGN TV ###########################
var designCounter = 0;
$('.design-toggle').click(function(){
    designCounter++;
    if(designCounter % 2 === 0){ //zoom out
        $('#the-body').css({"transform": "scale(1)"});
        $('#designs-link').css("display", "block");
        $('#design-tv-guide').css("display", "none");
        $('.design-tv-nav').css("display", "none");
        $('#design-bg-target').attr("src", "src/black.svg");
    } else {
        var tv3 = document.getElementById('design-tv').getBoundingClientRect();
        console.log('clocled design tv')
        $('#the-body').css({"transform": "scale(" + thisScale +")", "transform-origin-x": (tv3.right - 75), "transform-origin-y": (tv3.bottom)});
        $('#designs-link').css("display", "none");
        $('#design-tv-guide').css("display", "block");
        $('#design-bg-target').attr("src", "src/statics/gray-static.gif");
        $('.design-tv-nav').css("display", "block");   
    }
})


$('.design-tv-guide-toggle').click(function(){
    $('#design-tv-guide').css("display", "block");
})


var webCollection = ["src/web/slide1.jpg", "src/web/slide2.jpg", "src/web/slide3.jpg", "src/web/slide4.jpg", "src/web/slide5.jpg", "src/web/slide6.jpg", ]
var webCollectionDescript = ['LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020', 'LIQUID LAB <br/> General Assembly 2020']

var printCollection = ["https://ewscripps.brightspotcdn.com/dims4/default/3a54f41/2147483647/strip/true/crop/2038x1146+5+216/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F26%2F12%2Fa6f367014ff6bd297b8b2fbe3c6e%2Fandrew-plutt.jpg", "https://bloximages.newyork1.vip.townnews.com/outtherecolorado.com/content/tncms/assets/v3/editorial/d/e5/de52bca7-16bc-5b16-8c06-b05e593ff698/5eecdc1b7713c.image.jpg?crop=1254%2C705%2C0%2C65&resize=1254%2C705&order=crop%2Cresize", "https://s1.it.atcdn.net/wp-content/uploads/2019/11/Colorado-road-trip-hero-800x600.jpg", "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME"]
var printCollectionDescript = ["project 1", "project 2", "project 3", "project 4"]

var filmCollection = ["https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/things-to-write-about-760x400.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/07/tt-1-76.jpg", "https://cambridgewords.files.wordpress.com/2019/04/obvious_300x200.jpg?w=640", "https://www.howsweeteats.com/wp-content/uploads/2019/10/IMG_8425.jpg", "https://www.howsweeteats.com/wp-content/uploads/2019/03/tt-1-59.jpg", "https://assets.londonist.com/uploads/2018/05/i875/rainbow.jpg"]
var filmCollectionDescript = ["project #1", "project #2", "project #3", "project #4", "project #5", "prokect # 6"]

var fullDesignCollection = [].concat(webCollection, printCollection, filmCollection);
var fullDesignDescript = [].concat(webCollectionDescript, printCollectionDescript, filmCollectionDescript)



$('.design-channel').click(function(){
    $('#design-tv-guide').css("display", "none");
    var activeCategory = [];
    var activeDescript = [];
    if ($(this).attr("id") == "design-guide-close"){activeCategory = fullDesignCollection; activeDescript = fullDesignDescript }
    else if($(this).index() === 0){activeCategory = webCollection; activeDescript = webCollectionDescript }
    else if($(this).index()===1){activeCategory = printCollection; activeDescript = printCollectionDescript}
    else if($(this).index()===2){activeCategory = filmCollection; activeDescript = filmCollectionDescript}
    
    var categoryChannelCount = activeCategory.length;
    $('#design-bg-target').attr("src", activeCategory[0]);
    $('#design-project-description').html(activeDescript[0])
    var current = 0;

    //next button
    $('#design-nav-forward').click(function(){
        current++;
        if ((current) >= categoryChannelCount ){  //loops back 
            current = 0; 
            $('#design-bg-target').attr("src", activeCategory[current]);
            $('#design-project-description').html(activeDescript[current]);
        }
        $('#design-bg-target').attr("src", activeCategory[current]);
        $('#design-project-description').html(activeDescript[current]);
    });

    //back button
    $('#design-nav-backward').click(function(){
        current--;
        if (current < 0){
            $('#design-bg-target').attr("src", activeCategory[categoryChannelCount]);
            $('#design-project-description').html(activeDescript[categoryChannelCount]);
            current = categoryChannelCount;
        } else {
            $('#design-bg-target').attr("src", activeCategory[current]);
            $('#design-project-description').html(activeDescript[current]);
        }
        
        
        
    });
        

    })


var aboutClickCount = 0;
$('.about-link').click(function(){
    if(aboutClickCount % 2 === 0){
        $('#about-window').css({"display": "block", "animation": "tilt-in-fwd-tl .6s cubic-bezier(.25,.46,.45,.94) both"})
        $('.about-link').text('X');
        $('.about-link').css({"color": "black"})
        $('#haas-house').css({"color": "black"})
        

    } else {
        $('#about-window').css({ "animation": "slide-out-br .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.about-link').text('ABOUT');
        $('.about-link').css({"color": "white"})
        $('#haas-house').css({"color": "white"})
        
    }
    aboutClickCount++;
})

var contactClickCount = 0; 
$('.contact-link').click(function(){
    if(contactClickCount % 2 === 0){
        $('#contact-window').css({"display": "block", "animation": "tilt-in-fwd-tr .6s cubic-bezier(.25,.46,.45,.94) both"})
        $('.contact-link').text('X');
        $('.contact-link').css({"color": "black"})
        $('#haas-house').css({"color": "black"})
        
    } else {
        $('#contact-window').css({ "animation": "slide-out-bl .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.contact-link').text('CONTACT');
        $('.contact-link').css("color", "white")
        $('#haas-house').css({"color": "white"})
        
        
    }
    contactClickCount++;
    
})





function positionTVS(){

    $('.tv-window').each(function(){
        // $('#the-body').css({"transform": "scale(1)", "margin": "0", "left": "0"})
        var tvWrapper = document.getElementById("tv-wrapper").getBoundingClientRect();
        var boundingBOX = document.getElementById("tvs").getBoundingClientRect();
        var designBOX = document.getElementById("design").getBoundingClientRect();
        var photoBOX = document.getElementById("photo").getBoundingClientRect();

        var topspacer = tvWrapper.height - boundingBOX.height;
        var leftspacer = (tvWrapper.width - boundingBOX.width);

        $('#design').css({"bottom": boundingBOX.bottom / designBOX.bottom, "height": boundingBOX.height / 3.3, "width": boundingBOX.width / 4.4 })
        $('#film').css({"margin-top": topspacer, "height": boundingBOX.height / 3.6, "width": boundingBOX.width / 4.45 })
        $('#photo').css({"margin-top": topspacer + (photoBOX.height * 1.25), "margin-left": leftspacer / 4, "height": boundingBOX.height / 3.75, "width": boundingBOX.width / 4 })        

    });

    
}

$(window).on('resize', positionTVS).trigger('resize');
$(window).resize(mediaQUERY);
window.addEventListener("onload", positionTVS)

function mediaQUERY(){
	if ($(window).width() <= 900){	
        console.log("start shrinkin bish")
        // $("#tv-container").css({"width": "160%", "margin-left": "-30%"});
        
    }	
    thisScale = 3;
    thisMultiplier = 0.5;
}

console.log(thisScale)