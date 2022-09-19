class TitleComponent extends HTMLElement {
  
    constructor() {
      super();
    }
    
    connectedCallback() {
      this.innerHTML = `<h1>ECM Project</h1>`
    }
  
  }
  
  customElements.define("title", TitleComponent,{
    
  })