import { Section } from "./style";
import Img from "../../images/home/image1.jpg";

export default function Operation() {
    return(
       <Section id="como-funciona">
           <div className="center">
               <div className="header">
                   <h2>Como funciona?</h2>
               </div>
                <div className="container">
                    <article>
                        <img src={Img} />
                    </article>
                    <article className="content">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                        </p>
                        <button>Ver mais</button>
                    </article>
                </div>
               </div>
       </Section>
    )
}