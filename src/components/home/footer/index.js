import { Footerr } from "./style";
import Logo  from "../../images/logo/LogoPO.png";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    return(
        <Footerr>
            <div className="center">
                <div className="container">
                    <p>Desenvolvido por <strong>Pedro Souza</strong> | <a href="https://github.com/pedrosouz6" target="_blank"> {<BsGithub/>}</a></p>
                    <img src={Logo} />
                </div>
            </div>
        </Footerr>
    )
}