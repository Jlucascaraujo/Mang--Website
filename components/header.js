class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            #mainTitle {
                height: 30px;
                justify-content: center;
                background-color: ;
            }
    
            nav {
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #0a0a23;
            }
            ul {
                padding: 0;
                display: flex;
            }
            a {
                font-weight: 700;
                margin: 0 25px;
                color: #fff;
                text-decoration: none;
            }
        </style>
        <header>
            <div id="mainTitle"><h1>Jogando o Machado - Portfólio de José Lucas</h1> <!--Título principal da sua página. Importante para SEO--></div>
            <nav>
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="projetos.html">Projetos</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define('header-component', Header);