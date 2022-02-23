import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    text,
    background_power,
    background_normal
} = Styles.default;

export const Section = Style.section `
    width: 100%;
    height: auto;
    padding: 3rem 0;
    background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: ${text}
    }

    .container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;
    }
    
    .cards {
        width: 260px;
        height: auto;
        background-color: ${text};
        border-radius: 10px;
        padding: 25px 15px;
    }

    .icons i {
        display: block;
        text-align: center;
        font-size: 40px;
    }

    h4 {
        color: ${background_power};
        font-size: 14pt;
        margin: 5px 0 20px 0;
        text-align: center;
    }

    ul li {
        list-style: none;
        color: ${background_power};
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    button {
        width: 100%;
        height: 35px;
        color: ${text};
        margin-top: 15px;
        background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 78%, ${background_power} 100%);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 500;
        letter-spacing: .5px; 
    }

    button:hover {
        background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 28%, ${background_power} 100%);
    }
`