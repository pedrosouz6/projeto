import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    text,
    background_power,
    background_normal
} = Styles.default;

export const Section = Style.section `
    width: 100%;
    background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);

    .container {
        height: 250px;
        width: 100%;
    }

    .container h2 {
        text-align: center;
        color: ${text};
        margin-bottom: 3rem;
        position: relative;
    }

    .container h2::before{
        content: '';
        position: absolute;
        top: -65px;
        left: 50%;
        display: block;
        width: 10px;
        height: 30px;
        border-radius: 50px;
        background: ${text};
    }

    article {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
    }

    .cards {
        width: 260px;
        height: 320px;
        padding: 15px;
        background-color: ${text};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 3px 1px rgba(0, 127, 39, .6);
    }

    .cards p {
        color: ${background_power};
        letter-spacing: .3px;
        text-indent: 10px;
    }

    .icon i {
        font-size: 30pt;
    }

    .title h3 {
        color: ${background_power};
        margin-bottom: .8rem;
    }

    @media (max-width: 1252px){
        .container{
            height: 590px;
        }
    }

    @media (max-width: 870px){
        .container{
            padding-top: 200px;
            height: 780px;
        }
    }

    @media (max-width: 660px){
        .container{
            padding-top: 150px;
        }
    }

    @media (max-width: 560px){
        .container{
            padding-top: 100px;
        }
    }

    @media (max-width: 490px){
        .container{
            padding-top: 50px;
        }
    }

    @media (max-width: 668px){
        .container{
            height: 1430px;
        }
    }


`