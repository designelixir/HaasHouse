positionTVS;
var bodymeasure = document.getElementById('the-body').getBoundingClientRect();
var thisScaler = bodymeasure.width /500;

// #####################################################################################################################
// ZOOM FILM TV
var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;

    var filmCONTAINER = document.getElementById('film').getBoundingClientRect();
    var tvSPREAD = document.getElementById('tvs').getBoundingClientRect();
    // var thisScaler = filmCONTAINER.width / bodymeasure.width *17;
    var transformfilmX = filmCONTAINER.x + (filmCONTAINER.width / 2);
    var transformfilmY = filmCONTAINER.bottom - (filmCONTAINER.height / 2 ) - 100;

    if(clickFilm % 2 === 0){
        $('#the-body').css({"transform": "scale(1)" });
        $('#film-link').css("display", "block");
        $('#film-iframe').css("display", "none");
        $('#film-screen-nav').css("display", "none");
        $('#film-screen').css({"border": "none"})
    } else {
        $('#film-screen').css({"border": "2px solid #5d6564"})
        $('#the-body').css({"transform": "scale("+ thisScaler + ")", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY});
        $('#film-iframe').css("display", "block");
        $('#film-link').css("display", "none");
        $('#film-screen-nav').css("display", "block");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    }

});

// #####################################################################################################################
//TOGGLE THROUGH FILMS 
// var filmLinks = ["https://player.vimeo.com/video/499418125?quality=1080p", "https://player.vimeo.com/video/494873166?quality=1080p"];
// var currentVid = 0;
// $('#film-iframe').attr("src", filmLinks[currentVid]); //set initial video 
// //next button
// $('#movie-nav-next').click(function(){
//     if (currentVid === filmLinks.length -1 ){currentVid = -1;} //loops back 
//     currentVid++;
//     $('#film-iframe').attr("src", filmLinks[currentVid]);
// });
// //back button
// $('#movie-nav-prev').click(function(){
//     if(currentVid <= 0){currentVid = filmLinks.length;}
//     currentVid--;
//     $('#film-iframe').attr("src", filmLinks[currentVid]);
// });





// #####################################################################################################################
// ZOOM PHOTO TV 
var clickPhotoTV = 0;
$('.photo-toggle').click(function(){
    clickPhotoTV++;
    var photoBOX = document.getElementById('photo').getBoundingClientRect();
    var transformfilmX = photoBOX.x + (photoBOX.width / 2.25);
    var transformfilmY = photoBOX.y + (photoBOX.height / 2);
    
    if(clickPhotoTV % 2 === 0){
        $('#the-body').css({"transform": "scale(1)", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY});
        $('#photo-link').css("display", "block");
        $('#photo-screen').css({"background-image": "none"})

        $('#photo-tv-guide').css({"display": "none"})
        $('#photo-screen-nav').css({"display": "none"})
        $('#photo-target').removeAttr("src")
    } else {
        $('#the-body').css({"transform": "scale("+thisScaler+")", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY});
        $('#photo-link').css("display", "none");
        $('#photo-screen').css({"background-color":"black", "background-image": "url(src/statics/blue-static.gif)", "background-size": "cover", "background-repeat": "no-repeat"})
        $('#photo-tv-guide').css({"display": "block"})
        $('#photo-screen-nav').css({"display": "block"})
    }
});

var peopleCollection = ["src/People/one.jpg", "src/People/two.jpg", "src/People/three.jpg", "src/People/four.jpg", "src/People/five.jpg", "src/People/six.jpg", "src/People/seven.jpg" , "src/People/eight.jpg" , "src/People/nine.jpg"  ]
var peopleCollectionDescript = ['35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>AMY EHARA<br/> Pacifica, CA', '35mm <br/>MCKENNA KOLEDO <br/> Pacific Palisades, CA', '35mm <br/>LONE PADDLEBOARDER <br/> Mavericks Beach, CA', '35mm <br/>MIKE CHAMBERLAIN<br/> Half Moon Bay, CA', '35mm <br/>EMMA DEVINCENZI <br/> San Francisco, CA', '35mm <br/>EMMA DEVINCENZI<br/> San Francisco, CA', '35mm <br/> MIKE CHAMBERLAIN <br/> Pacifica, CA', '35mm <br/>LAWRENCE RICKFORD<br/> Pacifica, CA' ]

var placesCollection = ["src/Places/one.jpg", "src/Places/two.jpg", "src/Places/three.jpg", "src/Places/four.jpg", "src/Places/5.jpg", "src/Places/five.jpg", "src/Places/six.jpg", "src/Places/seven.jpg", "src/Places/eight.jpg", "src/Places/nine.jpg", "src/Places/ten.jpg", "src/Places/eleven.jpg" ]
var placesCollectionDescript = ['35mm <br/> Davenport, CA', '35mm <br/> Pigeon Point Lighthouse, CA', '35mm <br/> San Francisco, CA', '35mm <br/>Manhattan Beach, CA', '35mm <br/> Santa Cruz, CA', '35mm <br/>Coroico, Bolivia', '35mm <br/>Davenport, CA', '35mm <br/>Pacific Ocean', '35mm <br/>San Francisco, CA', '35mm <br/>Foster City, CA', '35mm <br/> Pigeon Point Lighthouse', '35mm <br/> MARINA DISTRICT <br/> San Francisco, CA' ]

var thingsCollection = ["src/Things/one.jpg", "src/Things/two.JPG", "src/Things/three.jpg", "src/Things/four.jpg", "src/Things/five.jpg"]
var thingsCollectionDescript = ['35mm <br/>PALACE OF FINE ARTS <br/> San Francisco, CA', '35mm <br/> ATLAS GENUS CONCERT <br/> Boulder, CO', '35mm <br/>MARINA DISTRICT <br/> San Francisco, CA', '35mm <br/>PALACE OF FINE ARTS <br/> San Francisco, CA', '35mm <br/> SANTA CRUZ BOARDWALK <br/> Santa Cruz, CA'   ]

var fullPhotoCollection = [].concat(peopleCollection, placesCollection, thingsCollection);
var fullPhotoDescript = [].concat(peopleCollectionDescript, placesCollectionDescript, thingsCollectionDescript)

var activeCategory = [];
var activeDescript = [];

// TOGGLE BETWEEN PHOTOS 
$('.photo-channel').click(function(){
    $('#photo-tv-guide').css("display", "none");
    $('#photo-screen').css("background-image", "none");
    activeCategory = [];
    activeDescript = [];

    if ($(this).attr("id") == "photo-guide-close"){activeCategory = fullPhotoCollection; activeDescript = fullPhotoDescript }
    else if($(this).index() === 0){activeCategory = peopleCollection; activeDescript = peopleCollectionDescript }
    else if($(this).index()===1){activeCategory = placesCollection; activeDescript = placesCollectionDescript}
    else if($(this).index()===2){activeCategory = thingsCollection; activeDescript = thingsCollectionDescript}

    var categoryChannelCount = activeCategory.length;
    
    $('#photo-target').attr("src", activeCategory[0]);
    $('#photo-project-description').html(activeDescript[0])
    var channelSwitch = 1;
    $('#channel-switch-img').click(function(){        
        var rotateThisMuch = channelSwitch * (360/13);
        if (channelSwitch < categoryChannelCount) {
            $('#channel-switch-img').css('transform', 'rotate('+rotateThisMuch+'deg)')
            $('#photo-target').css("animation", "fade-in 1s cubic-bezier(.39,.575,.565,1.000) both")
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]]) 
               
        } else {
            channelSwitch = 0;
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html(activeDescript[channelSwitch]);
            $('#channel-switch-img').css('transform', 'rotate(0deg)')
        }
        channelSwitch++;
    });
})

$('#photo-tv-guide-btn').click(function(){
    $('#photo-target').removeAttr("src");
    $('#photo-screen').css({"background-image": "url(src/statics/blue-static.gif)"})
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
    var designBOX = document.getElementById('design').getBoundingClientRect();

    var transformfilmX = designBOX.left + (designBOX.width / 2);
    var transformfilmY = designBOX.bottom + (designBOX.height / 2) - 125;

    if(designCounter % 2 === 0){ //zoom out
        $('#the-body').css({"transform": "scale(1)"});
        $('#design-link').css("display", "block");
        $('#design-tv-guide').css("display", "none");
        $('#design-screen-nav').css("display", "none");
        $('#design-target').removeAttr("src");
        $('.shadows').css("display", "block");
        $('#design-screen').css("background-image", "none");
    } else {
        $('#the-body').css({"transform": "scale("+thisScaler * 1.25+")", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY });
        $('#design-link').css("display", "none");
        $('#design-tv-guide').css("display", "block");
        $('#design-screen').css({"background-color": "black", "background-image": "url(src/statics/blue-static.gif)", "background-size": "cover", "background-repeat": "no-repeat"})
        $('#design-screen-nav').css("display", "block");   
        $('.shadows').css("display", "none");
    }
})


$('#design-tv-guide-btn').click(function(){
    $('#design-target').removeAttr("src");
    $('#design-screen').css({"background-image": "url(src/statics/gray-line-static.gif)", "background-size": "cover", "background-repeat": "no-repeat"})
    $('#design-project-description').text("");
    $('#design-tv-guide').css("display", "block");
    $('#design-target').css("display", "block");
   
})


var webCollection = ["src/web/slide1.jpg", "src/web/slide2.jpg", "src/web/slide3.jpg", "src/web/slide4.jpg", "src/web/slide5.jpg", "src/web/slide6.jpg", ]
var webCollectionDescript = ['LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020', 'LIQUID LAB <br/> General Assembly, 2020']

var printCollection = ["src/print/golden-coast-2.gif", "src/print/sea-cloud.jpg"]
var printCollectionDescript = ["Golden Coast Magazine", "Sea Cloud Film Poster"]

var filmCollection = ["src/film/comingsoon.svg"]
var filmCollectionDescript = ["Check back later!"]

var fullDesignCollection = [].concat(webCollection, filmCollection);
var fullDesignDescript = [].concat(webCollectionDescript,filmCollectionDescript)

var activeCategory = [];
var activeDescript = [];

$('.design-channel').click(function(){
    $('#design-tv-guide').css("display", "none");
    $('#design-screen').css("background-image", "none")

    activeCategory = [];
    activeDescript = [];
    if ($(this).attr("id") == "design-guide-close"){activeCategory = fullDesignCollection; activeDescript = fullDesignDescript }
    else if($(this).index() === 0){activeCategory = webCollection; activeDescript = webCollectionDescript }
    else if($(this).index()===1){activeCategory = printCollection; activeDescript = printCollectionDescript}
    else if($(this).index()===2){activeCategory = filmCollection; activeDescript = filmCollectionDescript}
    
    var categoryChannelCount = activeCategory.length;
    $('#design-target').attr("src", activeCategory[0]);
    $('#design-project-description').html(activeDescript[0])
    var current = 0;

    //next button
    $('#design-nav-forward').click(function(){
        current++;
        if ((current) >= categoryChannelCount ){  //loops back 
            current = 0; 
            $('#design-target').attr("src", activeCategory[current]);
            $('#design-project-description').html(activeDescript[current]);
        }
        $('#design-target').attr("src", activeCategory[current]);
        $('#design-project-description').html(activeDescript[current]);
    });

    //back button
    $('#design-nav-backward').click(function(){
        current--;
        if (current < 0){
            $('#design-target').attr("src", activeCategory[categoryChannelCount]);
            $('#design-project-description').html(activeDescript[categoryChannelCount]);
            current = categoryChannelCount;
        } else {
            $('#design-target').attr("src", activeCategory[current]);
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

        var w = window.innerWidth;
        var h = window.innerHeight;
        var tvWrapper = document.getElementById("tv-wrapper").getBoundingClientRect();
        var boundingBOX = document.getElementById("tvs").getBoundingClientRect();
        var designBOX = document.getElementById("design").getBoundingClientRect();
        var photoBOX = document.getElementById("photo").getBoundingClientRect();
        var filmBOX = document.getElementById("film").getBoundingClientRect();

        var topspacer = tvWrapper.height - boundingBOX.height;
        var leftspacer = (tvWrapper.width - boundingBOX.width);

        if (w / 2 > h){
            $('#film').css({"margin-top": topspacer + (filmBOX.height * 0.05), "height": boundingBOX.height / 3.6, "width": boundingBOX.width / 4.45, "top": "0.5%", "margin-left": "50.5%" })
            $('#photo').css({"margin-top": topspacer + (photoBOX.height * 1.3), "margin-left": leftspacer / 4, "height": boundingBOX.height / 3.75, "width": boundingBOX.width / 4, "left": "26%"  })        
            $('#design').css({"bottom": boundingBOX.bottom / designBOX.bottom, "height": boundingBOX.height / 3.55, "width": boundingBOX.width / 4.5, "margin-left": "49.75%", "margin-bottom": "2%" })
        
        } else {
            $('#film').css({"margin-top": topspacer, "height": boundingBOX.height / 3.6, "width": boundingBOX.width / 4.45 })
            $('#photo').css({"margin-top": topspacer + (photoBOX.height * 1.3), "margin-left": leftspacer / 4, "height": boundingBOX.height / 3.75, "width": boundingBOX.width / 4, "left": "26%"  })        
            $('#design').css({"bottom": boundingBOX.bottom / designBOX.bottom, "height": boundingBOX.height / 3.55, "width": boundingBOX.width / 4.5,  "margin-bottom": "3.25%" })
        }
    });
}

$(window).on('resize', positionTVS).trigger('resize');
$(window).resize(mediaQUERY);
$(window).resize(function(){
    $('#the-body').css({"transform": "scale(1)"})
})
window.onload = function() {
    positionTVS;
    if ($(window).width() <= 900){	
        console.log('triggered')
        thisScaler = bodymeasure.width / 400;
    }
  };


function mediaQUERY(){
		
    
}



