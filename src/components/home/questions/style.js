import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    background_power,
    background_normal,
    text
} = Styles.default

export const Section = Style.section `
    width: 100%;
    height: auto;
    background-color: ${text};
    padding: 5rem 0;

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 50px;
    }

    h2 {
        text-align: center;
        color: ${background_power};
        margin-bottom: 2rem;
    }

    article {
        margin-bottom: 1rem;
    }

    article label {
        background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);
        display: block;
        padding: 15px 10px;
        cursor: pointer;
        position: relative;
        color: ${text};
    }

    article label::after {
        content: '+';
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        color: ${text};
        font-size: 18pt;
    }

    article.active label::after {
        content: '-';
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
        font-size: 18pt;
    }

    article p {
        height: 0;
        overflow: hidden;
        color: ${background_power};
        transition: .3s ease-in-out;
        
    }

    article.active p {
        height: 80px;
        padding: 10px;
        border: 1px solid ${background_power};
        border-radius: 0 0 10px 10px;
    }
`