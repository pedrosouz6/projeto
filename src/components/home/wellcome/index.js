import { Section } from "./style";
import Img1 from "../../images/home/image2.jpg"

export default function Wellcome() {
    return(
        <Section className="sec">
          
            <div className="center">
                <div className="container">

                    <article className="message">
                        <h1>Alimentos orgânicos são as melhores opções para a sua saúde!</h1>
                        <button>Ver mais</button>
                    </article>

                    <article className="image">
                        <img src={Img1}/>
                    </article>

                </div>
            </div>
            
        </Section>
    )
}