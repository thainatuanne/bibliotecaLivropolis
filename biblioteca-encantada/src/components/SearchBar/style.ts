import styled, { keyframes } from "styled-components";

const floatingParticles = keyframes`
    0% {
        transform: translate(0, 0);
        opacity: 0.7;
    }
    50% {
        transform: translate(-10px, -10px);
        opacity: 1;
    }
    100% {
        transform: translate(0, 0);
        opacity: 0.7;
    }
`;

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
    margin: ${({ theme }) => theme.spacing.medium} auto;
    max-width: 400px;
    z-index: 1;
`;

export const FloatingParticles = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 150%;
    height: 150%;
    pointer-events: none;
    z-index: 0;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 30px;
        background: ${({ theme }) => theme.colors.title};
        border-radius: 50%;
        filter: blur(13px);
        opacity: 0.7;
        animation: ${floatingParticles} 4s infinite;
    }

    &::before {
        top: 30%;
        left: 10%;
    }

    &::after {
        bottom: 20%;
        right: 20%;
    }
`;

export const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.small};
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 25px;
    width: 100%;
    max-width: 400px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
    text-indent: 10px;
    position: relative;
    z-index: 1;

    &:focus {
        border-color: ${({ theme }) => theme.colors.primary};
    }

    &::placeholder {
        color: ${({ theme }) => theme.colors.border};
        font-style: italic;
    }
`;