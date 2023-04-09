import styled from "styled-components";

export const MainContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    text-align: center;

    padding: 24px 0;

    h1 {
            padding: 24px 0;
            font-size: 1.5em;
            text-decoration: underline green;
        }

    .subContainerProfile {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 220px;
            border: 4px solid green;
            border-radius: 50%;
        }

        span {
            padding: 12px 0;
        }
    }

    .subContainer {
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: center;
        justify-content: center;
        width: 90%;
        padding: 32px 0;
        border: 4px solid green;

        h2 {
            text-decoration: underline green;
            font-size: 1.2em;
        }

        h3 {
            text-decoration: underline green;
            font-size: 1em;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            text-align: center;

            margin: 12px 0;
            padding: 32px 0;
            width: 90%;
            border: 2px solid green;
        }

        img {
            max-width: 90%;
        }
    }
`