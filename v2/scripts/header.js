class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav id="top-nav">
      <div class=" flex-center-spacebetween" style="width: 100vw; max-height: 120px; padding: 0 0 0 20px">
          <a href="/"><img src="assets/haas-house-logo-large.svg" class="nav-logo" alt="Haas House logo"/></a>
          <button id="menuButton" onclick="toggleMenu()" class="flex-center-center hover">
              <span class="menu-layer" id="menuLayer1">|</span>
              <span class="menu-layer" id="menuLayer2">|</span>
              <span class="menu-layer" id="menuLayer3">|</span>
          </button>
      </div>
      
      <div class="flex-center-center flex-column" id="navigation-bar">
          <div class="flex-center-center flex-column nav-link-wrapper full-width">
              <a href="/video" class="nav-link" id="Video">video</a>
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

function toggleMenu() {
    if ($("#navigation-bar").css('visibility') === 'visible') {
        console.log("visibility = visible");

        $('#navigation-bar').slideUp(300, function() {
          
            $(this).css('visibility', 'hidden');
            
            $('.menu-layer').removeClass('animate') 
            $('.menu-layer').addClass('animateOpen') 
            $('#top-nav').css({"animation":"menuFill 0.5s reverse"})
            $('.nav-logo').css('display', 'inherit')
            
                    
        });
        
        
    } else if ($("#navigation-bar").css('visibility') === 'hidden') {
        console.log("visibility - hidden");
        

        $('#navigation-bar').css('visibility', 'visible').hide().slideDown(300);
        
        $('#top-nav').css({"animation":"menuFill 0.5s forwards"})
        $('.menu-layer').removeClass('animateOpen') 
        
        $('.menu-layer').addClass('animate') 
        $('.nav-logo').css('display', 'block')
        
        
    }
}
