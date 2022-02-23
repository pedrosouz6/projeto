import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    background_primary,
    background_secondary,
    font_color
} = Styles

export const Section = Style.section `
    width: 100%;
    height: auto;
    background-color: ${font_color};
    padding: 5rem 0;

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 0 50px;
    }

    h2 {
        text-align: center;
        color: ${background_primary};
        margin-bottom: 2rem;
    }


    article {
        margin-bottom: 1rem;
    }

    article label {
        background: linear-gradient(90deg, ${background_primary} 0%, ${background_secondary} 48%, ${background_primary} 100%);
        display: block;
        padding: 15px 10px;
        cursor: pointer;
        position: relative;
    }

    article label::after {
        content: '+';
        position: absolute;
        top: 50%;
        right: 15px;
        transform: translateY(-50%);
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
        color: ${background_primary};
        transition: .3s ease-in-out;
        
    }

    article.active p {
        height: 80px;
        padding: 10px;
        border: 1px solid ${background_primary};
        border-radius: 0 0 10px 10px;
    }
`