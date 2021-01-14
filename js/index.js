positionTVS;
var bodymeasure = document.getElementById('the-body').getBoundingClientRect();
var boundingBOX = document.getElementById("tvs").getBoundingClientRect();

var thisScaler = bodymeasure.width / (boundingBOX.width / 2.45);


// #####################################################################################################################
// ZOOM FILM TV
var clickFilm = 0; 
$('.film-toggle').click(function(){
    clickFilm++;

    var filmCONTAINER = document.getElementById('film').getBoundingClientRect();
    var tvSPREAD = document.getElementById('tvs').getBoundingClientRect();
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
        $('#the-body').css({"transform": "scale("+thisScaler+")", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY + 50});
        $('#film-iframe').css("display", "block");
        $('#film-link').css("display", "none");
        $('#film-screen-nav').css("display", "block");
        $('.tv-11').css("animation", "fade-in 0.5s cubic-bezier(.39,.575,.565,1.000) both");
    }

});


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
        $('#photo-screen').css({"background-image": "none", "background-color": "rgba(0,0,0,0)"})

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
    var channelSwitch = 0; 
    $('#photo-target').attr("src", activeCategory[channelSwitch]);
    $('#photo-project-description').html(activeDescript[channelSwitch])
   
    $('#next-photo').click(function(){
        channelSwitch++;
        console.log(channelSwitch)
        if (channelSwitch < categoryChannelCount){
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]]) 

        } else {
            channelSwitch = 0; 
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]]) 
        }
    });

    $('#last-photo').click(function(){
        channelSwitch--;
        if(channelSwitch < 0 ){
            channelSwitch = categoryChannelCount;
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]]) 
        } else {
            $('#photo-target').attr("src", activeCategory[channelSwitch]);
            $('#photo-project-description').html([activeDescript[channelSwitch]]) 
        }    
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
        $('#the-body').css({"transform": "scale("+thisScaler +")", "transform-origin-x": transformfilmX, "transform-origin-y": transformfilmY });
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
        $('#haas-house').attr("src", "src/haas-house-black.svg")
        

    } else {
        $('#about-window').css({ "animation": "slide-out-br .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.about-link').text('ABOUT');
        $('.about-link').css({"color": "white"})
        $('#haas-house').attr("src", "src/haas-house-white.svg")        
    }
    aboutClickCount++;
})

var contactClickCount = 0; 
$('.contact-link').click(function(){
    if(contactClickCount % 2 === 0){
        $('#contact-window').css({"display": "block", "animation": "tilt-in-fwd-tr .6s cubic-bezier(.25,.46,.45,.94) both"})
        $('.contact-link').text('X');
        $('.contact-link').css({"color": "black"})
        $('#haas-house').attr("src", "src/haas-house-black.svg")
        
    } else {
        $('#contact-window').css({ "animation": "slide-out-bl .5s cubic-bezier(.55,.085,.68,.53) both"})
        $('.contact-link').text('CONTACT');
        $('.contact-link').css("color", "white")
        $('#haas-house').attr("src", "src/haas-house-white.svg")
        
        
    }
    contactClickCount++;
    
})



function positionTVS(){
    var tvWrapper = document.getElementById("tv-wrapper").getBoundingClientRect();
    var boundingBOX = document.getElementById("tvs").getBoundingClientRect();
    var designBOX = document.getElementById("design").getBoundingClientRect();
    var photoBOX = document.getElementById("photo").getBoundingClientRect();
    var filmBOX = document.getElementById("film").getBoundingClientRect();

    var topspacer = tvWrapper.height - boundingBOX.height;
    var leftspacer = (tvWrapper.width - boundingBOX.width);
    $('#film').css({
        "margin-top": topspacer,
        "height": boundingBOX.height / 3.6,
        "width": boundingBOX.width / 4.4,
        "top": "1.65%",
        "margin-left": "50.65%" 
    })
    $('#photo').css({
        "margin-top": topspacer, 
        "top": boundingBOX.height / 3,
        "bottom": "27%",
        "margin-left": leftspacer / 4, 
        "height": boundingBOX.height /3.4, 
        "width": boundingBOX.width / 3.9, 
        "left": "26%"  
    })
    $('#design').css({
        "bottom": boundingBOX.bottom / designBOX.bottom, 
        "height": boundingBOX.height / 3.4, 
        "width": boundingBOX.width / 4.3, 
        "margin-left": leftspacer / 2, 
        "left": boundingBOX.width / 2.05,
        "top": boundingBOX.height / 1.55,
        "margin-top": topspacer
    })        

    
}


$('.power-btn').mouseover(function(){
    $('.power-btn').attr("src", "src/off_1.svg");
})

$('.power-btn').mouseout(function(){
    $('.power-btn').attr("src", "src/on_1.svg");
})