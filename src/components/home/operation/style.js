import Style from "styled-components";
import { Styles } from "../../../styles/styles";

const {
    text,
    background_power,
    background_normal
} = Styles;

export const Section = Style.section `
    width: 100%;
    height: auto;
    background-color: ${text};
    padding: 230px 0 2rem 0;

    .header h2{
        color: ${background_power};
        text-align: center;
        margin-bottom: 3rem;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        margin-bottom: 4rem;
    }

    article img {
        width: 100%;
    }

    article {
        flex: 1 1 470px;
    }

    .content p {
        text-indent: 25px;
        letter-spacing: .5px;
        line-height: 25px;
        color: ${background_power};
        font-weight: 500;
    }

    .content button {
        padding: 10px 35px;
        font-size: 12pt;
        border-radius: 10px;
        background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 78%, ${background_power} 100%);
        margin-top: 1.5rem;
        cursor: pointer;
    }  

`