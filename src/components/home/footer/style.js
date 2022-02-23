import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    text,
    background_power,
    background_normal
} = Styles.default;

export const Footerr = Style.footer `
    width: 100%;
    height: 30vh;
    background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);
    
    .container {
        width: 100%;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        display: flex;
        align-items: center;
        color: ${text};
        gap: 1rem;
    }

    a {
        color: ${text};
        font-size: 16pt;
    }

`