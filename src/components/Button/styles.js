import { styled } from "styled-components";

export const ButtonContainer = styled.button`
    border: 1px solid #fafafa;
    background-color: #fafafa;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px;

    &: hover {
        background-color: #fafafa40;
        cursor: pointer;
    }
`;
