import { Section } from "./style";

export default function Questions() {
    
    const Toggle = (e) => {
        const element = e.target;
        const elementFather = element.parentNode;
        const classFather = elementFather.getAttribute("class");

        if(classFather === "active") {
            elementFather.classList.remove("active");
        } else {
            elementFather.classList.add("active");
        }
    }

    return (
        <Section id="faq">
            <div className="container">
                <h2>Perguntas Frequentes</h2>
                <article>
                    <label onClick={Toggle}>There are many variations of passages.</label>
                    <p>There are many variations of passages. There are many variations of passages. There are many variations of passages.</p>
                </article>
                <article>
                    <label onClick={Toggle}>There are many variations of passages.</label>
                    <p>There are many variations of passages. There are many variations of passages. There are many variations of passages.</p>
                </article>
                <article>
                    <label onClick={Toggle}>There are many variations of passages.</label>
                    <p>There are many variations of passages. There are many variations of passages. There are many variations of passages.</p>
                </article>
                <article>
                    <label onClick={Toggle}>There are many variations of passages.</label>
                    <p>There are many variations of passages. There are many variations of passages. There are many variations of passages.</p>
                </article>
            </div>
        </Section>
    )
}