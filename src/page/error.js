

const errorHtml = `
    <h1>404</h1>
    <p>Sorry, the page you are looking for is not found.</p>
    <p>Error code:404</p>
`;


class AgamottoError extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container');
        errorContainer.innerHTML = errorHtml;
        this.appendChild(errorContainer);
    }
  }
  
  customElements.define("agamotto-error", AgamottoError);