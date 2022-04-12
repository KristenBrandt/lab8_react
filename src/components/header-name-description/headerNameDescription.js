class HeaderNameDescription extends HTMLElement {

  constructor(){
    super();

    let shadowDom = null;
    shadowDom = this.attachShadow({mode: "open"});

    //reference css
    const link = document.createElement('link');
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "components/header-name-description/headerNameDescription.css");
    shadowDom.appendChild(link);

    const newDiv = document.createElement('div');
    newDiv.id = "container-ti";
    const newH1 = document.createElement('h1');

    if(this.hasAttribute('data-title')){
      newH1.innerText = this.getAttribute('data-title');
      newH1.className = "notitle";
    }else{
      newH1.innerText = "Add your title";
      newH1.className = "notitle";
    }

    const newP = document.createElement('p');
    newP.innerText = this.getAttribute('data-description');
    newP.className = "notitle";

    //agregar nuevos elementos :)
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);


    //agregar hijos al shadowDom
    shadowDom.appendChild(newDiv);


  }
}
customElements.define('header-name-description', HeaderNameDescription);
