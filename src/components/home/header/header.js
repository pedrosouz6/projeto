import { useState } from "react";
import Logo  from "../../images/logo/LogoPO.png";

import { HeaderSite } from "./style";

//Icons
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {

    const [ toggle, setToggle ] = useState(false);

    const menuMobile = () => {
        setToggle(!toggle);
    }

    return (
        <HeaderSite>
            <div className="center">
                <div className="container">
                    <div className="logo">
                        <img src={Logo}/>
                    </div>
                    <nav className={toggle ? "active" : ""}>
                        <ul className="list">
                            <li><a href="#benefits" onClick={menuMobile}>Benefícios</a></li>
                            <li><a href="#faq" onClick={menuMobile}>FAQ</a></li>
                            <li><a href="#como-funciona" onClick={menuMobile}>Como funciona?</a></li>
                            <button className="register" 
                            onClick={menuMobile}> 
                            <a href="#cadastrar">Cadastrar</a>
                            </button>
                        </ul>
                        <button className="register"> <a href="#cadastrar">Cadastrar</a> </button>
                        <button 
                        className="menu" 
                        onClick={menuMobile}>
                            {toggle ? <AiOutlineClose/> : <AiOutlineMenu/>}
                            
                        </button>
                    </nav>
                </div>
            </div>
        </HeaderSite>    
    )
}