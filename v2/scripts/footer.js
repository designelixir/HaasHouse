class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <footer class="flex-center-spacebetween footer-container">
        <p class="white-text">&copy; 2022 Colorado Videos </p>
        <a href="https://www.facebook.com/ColoradoHistoricalVideos" target="_blank" class="hover"><?xml version="1.0" encoding="UTF-8"?>
        <svg id="b" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 64.206 123.892">
        
          <g id="c" data-name="Layer 1">
            <path class="d" style="fill: white;" d="M19.036,123.892c-.021-.522-.06-1.044-.06-1.567-.003-17.738-.003-35.475-.003-53.213v-1.702H0v-22.028h18.973c0-.619-.002-1.088,0-1.558.024-5.764-.121-11.536.117-17.291.287-6.94,2.339-13.304,7.237-18.487,3.726-3.942,8.375-6.175,13.623-7.296C44.214-.161,48.528-.054,52.836.111c3.502.134,6.997.436,10.494.671.275.018.546.097.876.158v19.639c-.417,0-.841-.005-1.265,0-4.311.063-8.628,0-12.931.224-5.088.263-7.965,3.087-8.176,8.207-.219,5.312-.076,10.639-.087,15.959,0,.072.054.144.138.353h21.606c-.953,7.406-1.886,14.651-2.835,22.025h-18.839c-.042.473-.098.817-.098,1.161-.004,18.181-.004,36.362-.001,54.543,0,.28.039.561.06.841h-22.743Z"/>
          </g>
        </svg></a>
        <a class="white-text hover" id="designElixirCredits" href="https://designelixir.studio" target="_blank">Made with &hearts; by Design
            Elixir Studio</a>
    </footer>
`;
  }
}

customElements.define('footer-component', Footer);