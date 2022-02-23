import Style from "styled-components";

import { Styles } from "../../../styles/styles";

const {
      text,
      background_power,
      background_normal
  } = Styles.default;

 //820px

export const HeaderSite =  Style.header `
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      background: linear-gradient(90deg, ${background_power} 0%, ${background_normal} 48%, ${background_power} 100%);

    .container {
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
      }

      nav {
            display: flex;
            align-items: center;
            gap: 1.5rem;
      }

      
      .list {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 1.5rem;
      }
      
      .list button {
            display: none;
      }
      
      .list a {
            color: ${text};
            text-decoration: none;
      }
      
      .register a {
            padding: 10px 20px;
            background-color: ${text};
            color: ${background_power} !important;
            border-radius: 10px;
            text-decoration: none;
            font-weight: 500;
      }
      
      .menu {
            background: none;
            color: ${text};
            font-size: 22pt;
            display: none;
            cursor: pointer;
      }
      
      @media (max-width: 820px) {
            .menu{
                  display: flex;
                  z-index: 12;
            }

            .list {
                  width: 50%;
                  height: 100vh;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  z-index: 11;
                  top: 0;
                  left: 100%;
                  visibility: hidden;
                  background: ${background_power};
                  border-left: 2px solid ${text};
                  padding: 10px;
                  position: fixed;
                  transition: .3s ease-in-out;
            }

            .list button {
                  display: block;
                  margin-top: 1rem;
            }

            nav.active .list {
                  visibility: visible;
                  left: 50%;
            }
      }

      @media (max-width: 570px) {
            .list {
                  width: 100%;
                  border: none;
            }

            nav.active .list {
                  left: 0%;
            }

      }
`