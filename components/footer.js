class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            footer {
                background-color: #edc79b;
                position: fixed;
                width: 100%;
                left: 0;
                bottom: 0;
                height: 100px;
                alight-items: left;
                justify-items: left;
                padding: 15px;
            }
            footer a {
                text-decoration: none;
                color: #46070f;
            }
            footer a:hover {
                text-decoration: underline;
                color: #edc79b;
                background-color: #46070f;
                border-radius: 5px;
                padding: 5px;
            }
        </style>
    <footer>
        <h3><b><a href="contato.html">Contato</a></b></h3>
    </footer>
        `;
    }
}

customElements.define('footer-component', Footer);