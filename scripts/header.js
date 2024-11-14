class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="top-nav">
      <div class=" flex-center-spacebetween" style="width: 100vw; max-height: 120px; padding: 0 10px 0 20px">
          <a href="/"><img src="assets/casey-haas-surfer-logo.svg" class="nav-logo fade-in" alt="Haas House logo"/></a>
          <button id="menuButton" onclick="toggleMenu()" class="flex-center-center hover">
              <span class="menu-layer" id="menuLayer1">|</span>
              <span class="menu-layer" id="menuLayer2">|</span>
              <span class="menu-layer" id="menuLayer3">|</span>
          </button>
      </div>
      
      <div class="flex-center-center flex-column" id="navigation-bar">
          <div class="flex-center-center flex-column nav-link-wrapper full-width">
              <a href="/motion" class="nav-link" id="Motion">motion</a>
              <a href="/photo" class="nav-link" id="Photo">photo</a>
              <a href="/about" class="nav-link" id="About">about</a>
              <a href="/contact" class="nav-link" id="Contact">contact</a>
          </div>
      </div>
    </nav>
    
`;
  }
}

customElements.define('header-component', Header);

//Determine the active page
$(document).ready(function () {
  var customName = $("#navigation").data("nav");
  $('#' + customName).addClass('active-link')
  $('#' + customName + "Mobile").addClass('active-link')
});



// Toggle function using GSAP for smooth transitions
function toggleMenu() {
    const menu = $("#navigation-bar");
    const menuLayers = $(".menu-layer");
    const navLogo = $(".home-nav .nav-logo");
    const topNav = $("#top-nav");

    if (menu.css('visibility') === 'visible') {
        console.log("visibility = visible");
        
        // Slide up animation with GSAP
        gsap.to(menu, {
            duration: 0.3,
            height: 0,
            opacity: 0,
            onComplete: function() {
                menu.css('visibility', 'hidden');
                menuLayers.removeClass('animate');
                menuLayers.addClass('animateOpen');
                navLogo.css("display", "none");
                gsap.to(topNav, { duration: 0.5, animation: "menuFill reverse" });
            }
        });
    } else if (menu.css('visibility') === 'hidden') {
        console.log("visibility - hidden");
        
        // Set menu visibility and animate slide down
        menu.css('visibility', 'visible').css('height', '100%');
        gsap.fromTo(menu, { height: 0, opacity: 0 }, { 
            duration: 0.3,
            height: "80vh",
            opacity: 1
        });
        
        gsap.to(topNav, { duration: 0.5, animation: "menuFill forwards" });
        menuLayers.removeClass('animateOpen');
        menuLayers.addClass('animate');
        navLogo.css('display', 'block');
    }
}
