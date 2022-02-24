import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
    text,
    background_power,
    background_normal
} = Styles.default;

export const Section = Style.section `
    width: 100%;
    min-height: 110vh;
    max-height: auto;
    background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);
    padding-top: 60px;
    z-index: 10;

    .container {
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
    }

    .container article {
        flex: 1 1 350px;
    }

    .message h1{
        font-size: 30pt;
        font-weight: 600;
        color: ${text}; 
    }
    
    .message button {
        margin-top: 1.5rem;
        padding: 10px 30px;
        background-color: white;
        color: ${background_power};
        font-size: 12pt;
        font-weight: 600;
        letter-spacing: .5px;
        border-radius: 10px
    }
    
    .image img {
        max-width: 100%;
        min-width: 380px;
        clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
    }

    @media (max-width: 980px){
        .message h1 {
            font-size: 28pt;
            margin-top: 3rem;
        }
    }

    @media (max-width: 900px){
        .image img{
            width: 100%;
        }

        .message h1 {
            font-size: 25pt;
            margin-top: 2.5rem;
        }
        
        .message button {
            margin-bottom: .5rem;
        }
    }

    @media (max-width: 668px){
        .message h1 {
            font-size: 20pt;
            margin-top: 3rem;
        }
        
        .message button {
            margin-bottom: 1rem;
        }
        
        
    }
` 