import { Section } from "./style";

//Icons
import { FcBiohazard } from "react-icons/fc"
import { FcPlus } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";

export default function Benefits () {
    return (
        <Section id="benefits">
            <div className="center">
                <div className="container">
                   <header>
                       <h2>Os Benecífios dos Produtos Orgânicos</h2>
                   </header>
                   <article>
                        <div className="cards">
                            <div className="icon">
                                <i><FcPlus/></i>
                            </div>
                            <div className="title">
                                <h3>Title 1</h3>
                            </div>
                            
                            <div className="content">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcOk/></i>
                            </div>

                            <div className="title">
                                <h3>Title 2</h3>
                            </div>
                            <div className="content">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcBiohazard/></i>
                            </div>

                            <div className="title">
                                <h3>Title 3</h3>
                            </div>
                           
                            <div className="content">
                                <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                </p>
                            </div>
                       </div>
                       <div className="cards">
                            <div className="icon">
                                <i><FcBullish/></i>
                            </div>

                            <div className="title">
                                <h3>Title 4</h3>
                            </div>
                           
                            <div className="content">
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                       </div>
                   </article>
                </div>
            </div>
        </Section>            
    )
}