fetch("./components/image-card/imageCard.html")
  .then((stream) => stream.text())
  .then((htmlFile) => renderComponent(htmlFile));


function renderComponent(htmlFile){
  class ImageCard extends HTMLElement{
    constructor(){
      super();

      const shadowDom = this.attachShadow({mode:"open"});
      shadowDom.innerHTML = htmlFile;
      
      //reference css
      const link = document.createElement('link');
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "components/image-card/imageCard.css");
      shadowDom.appendChild(link);
      

      }
      //callbacks :) funciones para manejar el estado
      connectedCallback() {
        const {shadowRoot} = this;
        console.log('Custom component element added.');

        ///parametros de entrada
        let image = "./components/tarjeta1.png";
        let backimg = "./components/tarjeta9.png";

        if (this.hasAttribute('image1')){
          image = this.getAttribute('image1');
        }
        let img1 = shadowRoot.getElementById('image1');
        img1.src=image;
        let img2 = shadowRoot.getElementById("imageback");
        img2.src= backimg;

        

      }
    }

  customElements.define("image-card", ImageCard);
}

