import { css, Global, useTheme } from "@emotion/react";
import reset from "emotion-reset";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/svg-arrow.css";

function GlobalStyles() {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={css`
          ${reset}
          body,
          html {
            width: 100%;
            height: 100%;
            position: relative;
            font-family: "Montserrat", sans-serif;
            background-color: ${theme.colors.background};
            scroll-behavior: smooth;
          }

          #root {
            & > div {
              overflow: hidden;
            }
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            font-family: "Montserrat", sans-serif;
            outline: none;
          }

          a,
          a:active {
            text-decoration: none;
            color: inherit;
          }
        `}
      />
      {/* Scrollbars */}
      <Global
        styles={css`
          * {
            scrollbar-width: thin;
            scrollbar-color: ${theme.colors.scroll} transparent;
            &::-webkit-scrollbar {
              width: 8px;
              height: 8px;
            }

            [data-simplebar]::-webkit-scrollbar {
              display: none;
            }
            &::-webkit-scrollbar-thumb {
              background-color: ${theme.colors.scroll};
              border-radius: 30px;
            }
            &::-webkit-scrollbar-track {
              background-color: transparent;
            }
          }
        `}
      />
    </>
  );
}

export default GlobalStyles;
