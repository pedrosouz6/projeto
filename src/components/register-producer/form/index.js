import { Section } from "./style";

export default function Form () {
    return (
        <Section>
            <div className="center">
                <div className="container">
                    <div className="aside-left">
                        <h1>Faça seu cadastro na plataforma</h1>
                    </div>

                    <div className="aside-right">
                        <form>

                            <fieldset id="personal-data">
                                <legend>Dados Pessoais</legend>
                                
                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="Sobrenome" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Senha" />
                            </fieldset>

                            <fieldset>
                                <legend>Dados Pessoais</legend>

                                <input type="text" placeholder="Nome" />
                                <input type="text" placeholder="Sobrenome" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Senha" />
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        </Section>
    )
}