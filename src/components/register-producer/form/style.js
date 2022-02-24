import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    background_weak,
    background_normal,
    background_power,
    text
} = Styles.default

export const Section = Style.section `
    width: 100%;
    height: 100vh;
    background: ${background_weak};

    .container {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .aside-left {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .aside-left h1 {
        font-size: 36pt;
        color: ${background_power};
    }

    .aside-right {
        width: 100%;
        display: flex;
        align-items: center;
    }
    
    form {
        padding: 1rem;
        border-radius: 3px;
        background: linear-gradient(130deg, ${background_power} 0%, ${background_normal} 50%, ${background_power} 100% ) ;
    }

    fieldset {
        border: 1px solid white;
        padding: 15px;
    }
    
    #personal-data {
        margin-bottom: 1rem;
    }

    fieldset legend {
        color: white;
        padding: 0 5px;
    }

    fieldset input {
        width: 100%;
        height: 38px;
        margin-bottom: 1.5rem;    
        padding: 0 8px;
        border-radius: 2px;
    }

    fieldset input:last-child {
        margin-bottom: 0;
    }
`