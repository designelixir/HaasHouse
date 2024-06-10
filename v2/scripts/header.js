class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <button id="menuButton" onclick="toggleMenu()" class="flex-center-center hover">
      <span class="menu-layer">|</span>
      <span class="menu-layer">|</span>
      <span class="menu-layer">|</span>
    </button>
`;
  }
}

customElements.define('header-component', Header);

//Determine the active page
$(document).ready(function () {
  var customName = $("#mainHeader").data("nav");
  $('#' + customName).addClass('active-link')
  $('#' + customName + "Mobile").addClass('active-link')
});

function toggleMenu() {
  console.log("toggled")
  if ($("#navigation-bar").css("visibility", "hidden")) {
      console.log("visible")
      
      $('#navigation-bar').css("visibility", "visible").slideDown()
      $('.menu-layer:nth-child(2)').css("opacity", "0")
      $('.menu-layer:nth-child(1)').css({"transform": "rotate(-45deg)"})
      $('.menu-layer:nth-child(3)').css({"transform": "rotate(45deg) translate(-20px, 20px)"})
  } else {
    $('#navigation-bar').css("visibility", "hidden").slideUp()
    $("#navigation").css('display', 'flex')  
    $("#navigation").slideDown();
    $('.menu-layer').css({"opacity": "1", "transform": "unset"})

  }
}