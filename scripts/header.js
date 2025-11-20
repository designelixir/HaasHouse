class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="top-nav">
      <div class="flex-center-spacebetween" style="width: 100vw; max-height: 120px; padding: 20px">
          <a href="/"><img src="assets/casey-haas-surfer-logo.svg" class="nav-logo fade-in" alt="Haas House logo"/></a>
          <button id="menuButton" onclick="toggleMenu()" class="hover">
              <span class="menu-layer" id="menuLayer1"></span>
              <span class="menu-layer" id="menuLayer2"></span>
              <span class="menu-layer" id="menuLayer3"></span>
          </button>
      </div>
      
      <div class="flex-center-center flex-column" id="navigation-bar">
          <div class="flex-center-center flex-column nav-link-wrapper full-width">
              <a href="/film" class="nav-link text-font" id="Film">film</a>
              <a href="/photo" class="nav-link text-font" id="Photo">photo</a>
              <a href="/about" class="nav-link text-font" id="About">about</a>
              <a href="/contact" class="nav-link text-font" id="Contact">contact</a>
          </div>
      </div>
    </nav>
`;
    
    // Set active link after component is rendered
    setTimeout(() => {
      var customName = $("#navigation").data("nav");
      if (customName) {
        $('#' + customName).addClass('active-link');
        $('#' + customName + "Mobile").addClass('active-link');
      }
    }, 0);
  }
}

customElements.define('header-component', Header);

// Determine the active page (backup in case the component method doesn't work)
$(document).ready(function () {
  var customName = $("#navigation").data("nav");
  if (customName) {
    $('#' + customName).addClass('active-link');
    $('#' + customName + "Mobile").addClass('active-link');
  }
});

// Toggle function using GSAP for smooth transitions
function toggleMenu() {
    const menu = $("#navigation-bar");
    const menuButton = $("#menuButton");
    const menuLayer1 = $("#menuLayer1");
    const menuLayer2 = $("#menuLayer2");
    const menuLayer3 = $("#menuLayer3");
    const navLogo = $(".home-nav .nav-logo");
    const topNav = $("#top-nav");
    const navLinks = $(".nav-link");

    if (menu.css('visibility') === 'visible') {
        console.log("visibility = visible - CLOSING");
        
        // Remove menu-open class
        topNav.removeClass('menu-open');
        
        // Create a timeline for closing animation
        const closeTimeline = gsap.timeline();
        
        // Fade out nav links FIRST and QUICKLY
        closeTimeline.to(navLinks, {
            duration: 0.2,
            opacity: 0,
            y: -20,
            stagger: 0.03,
            ease: "power2.in"
        }, 0);
        
        // Animate hamburger icon back to normal - starts after links begin fading
        closeTimeline.to(menuLayer1, {
            duration: 0.4,
            top: "10px",
            rotation: 0,
            y: 0,
            ease: "power2.inOut"
        }, 0.1);
        
        closeTimeline.to(menuLayer2, {
            duration: 0.4,
            opacity: 1,
            ease: "power2.inOut"
        }, 0.1);
        
        closeTimeline.to(menuLayer3, {
            duration: 0.4,
            bottom: "10px",
            rotation: 0,
            y: 0,
            ease: "power2.inOut"
        }, 0.1);
        
closeTimeline.to(menu, {
    duration: 0.5,
    height: 0,
    ease: "power3.inOut",
    onComplete: function() {
        menu.css('visibility', 'hidden');
        navLogo.css("display", "none");
        // Reset nav links for next open
        gsap.set(navLinks, { opacity: 1, y: 0 });
    }
}, 0.15);

// Animate background - CLEAR the background color
closeTimeline.to(topNav, {
    duration: 0.5,
    backgroundColor: "rgba(255, 251, 248, 0)",
    height: "80px",
    ease: "power2.inOut"
}, 0.1);
        
    } else if (menu.css('visibility') === 'hidden') {
        console.log("visibility - hidden - OPENING");
        
        // Add menu-open class
        topNav.addClass('menu-open');
        
        // Create a timeline for opening animation
        const openTimeline = gsap.timeline();
        
        // Animate to X
        openTimeline.to(menuLayer1, {
            duration: 0.4,
            top: "50%",
            rotation: 45,
            y: "-50%",
            ease: "power2.inOut"
        }, 0);
        
        openTimeline.to(menuLayer2, {
            duration: 0.4,
            opacity: 0,
            ease: "power2.inOut"
        }, 0);
        
        openTimeline.to(menuLayer3, {
            duration: 0.4,
            bottom: "50%",
            rotation: -45,
            y: "50%",
            ease: "power2.inOut"
        }, 0);
        
        // Set menu visibility and animate slide down
        menu.css('visibility', 'visible');
        
        openTimeline.fromTo(menu, 
            { height: 0 }, 
            { 
                duration: 0.6,
                height: "80vh",
                ease: "power3.out"
            }, 0
        );
        
        // Animate background
        openTimeline.to(topNav, {
            duration: 0.6,
            backgroundColor: "rgba(255, 251, 248, 1)",
            height: "100vh",
            ease: "power2.inOut"
        }, 0);
        
        // Fade in nav links with stagger
        openTimeline.fromTo(navLinks,
            { opacity: 0, y: 30 },
            {
                duration: 0.5,
                opacity: 1,
                y: 0,
                stagger: 0.08,
                ease: "power2.out"
            }, 0.3
        );
        
        navLogo.css('display', 'block');
        
        // Fade in logo
        openTimeline.fromTo(navLogo,
            { opacity: 0 },
            {
                duration: 0.4,
                opacity: 1,
                ease: "power2.out"
            }, 0.2
        );
    }
}