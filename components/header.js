class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .trueHeader {
                padding: 10px;
                display: flex;
                height: 40px;
                justify-content: center;
                align-items: center;
                background-color: #46070f;
                color: #edc79c;
            }
            #mainTitle {
                text-align: center;
                font-size: 30px;
                font-weight: 300;
                letter-spacing: 1px;
                text-transform: uppercase;
                display: grid;
                grid-template-columns: 1fr max-content 1fr;
                grid-template-rows: 27px 0;
                grid-gap: 20px;
                align-items: center;
                font-family: "Noto Sans", sans-serif;
                padding-bottom: 10px;
                overflow: hidden;
            }
            #mainTitle:after, #mainTitle:before {
                content: " ";
                display: block;
                border-bottom: 1px solid #edc79c;
                border-top: 1px solid #edc79c;
                height: 5px;
                background-color: #46070f;
            }
            #subTitle {
                text-align: center;
                font-size: 12px;
                font-weight: 150;
                letter-spacing: 1px;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                font-family: "Noto Sans", sans-serif;
                padding-bottom: 10px;
                overflow: hidden;
            }
            nav {
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #BCCDCD;           
            }
            ul {
                padding: 0;
                margin: 5px;     
                display: flex;
            }
            li {            
                list-style-type: none;
            }
            header a {
                box-shadow: inset 0 0 0 0 #BCCDCD;
                font-weight: 700;
                margin: 0 25px;
                color: #04241C;
                text-decoration: none;
                padding: 5px;
                border-radius: 5px;
                margin: .25rem;
                transition: color .2s ease-in-out, box-shadow .2s ease-in-out, padding .2s ease-in-out, border-radius .2s ease-in-out;
            }
            header a:hover {
                color: #BCCDCD;
                box-shadow: inset 100px 0 0 0 #04241C;
                text-decoration: underline;
                border-radius: 5px;
                padding: 5px;
            }
            
        </style>
        <header>
            <div id="mainTitle" class="trueHeader"><h1 class="text-nowrap">Jogando o Machado</h1> <!--Título principal da sua página. Importante para SEO--></div>
            <div id="subTitle" class="trueHeader"><p class="text-nowrap">Por José Lucas</p></div>
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