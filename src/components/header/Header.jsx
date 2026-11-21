import './Header.css';
import minhaLogo from '../../assets/logoCreator_imagetologo.png'

export function Header() {
    return(
        // preciso alterar esquerdo direito seus tamanhos igausi o original so depois mudar o conteudo geral do esquerdo primeiro logo menu 
        <header className="topo">
        <div className="topoc">
            <div className="esquerdo">
        
                <img src={minhaLogo} width="36px" height="36px" alt=""/>
                
            <h2 className="logo">Loop<span className="agenda">Agenda</span></h2>
       
        
            </div>
        
            <div className="centro">
        <nav>
            <ul className=" menu">
                <li><a href="#">Para quem é</a></li>
                <li><a href="#"> Como Funciona</a></li>
                <li><a href="#">Recursos</a></li>
                <li><a href="#">Preços</a></li>
                <li><a href="#">Duvidas</a></li>
            </ul>
        </nav>
       </div>
        <div className="direita">
            <button className="entrar">Entrar</button>
            <button className="teste">testar 15 Dias gratis <i className="fa-solid fa-arrow-right-long"></i></button>
        </div>
        </div>
    </header>
    )
}
export default Header