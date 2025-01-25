import { createGlobalStyle, keyframes } from 'styled-components';

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

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
    line-height: 1.6;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      background: ${({ theme }) => theme.colors.title};
      border-radius: 50%;
      filter: blur(15px);
      opacity: 0.7;
      animation: ${floatingParticles} 4s infinite;
      pointer-events: none;
    }

    &::before {
      top: 30%;
      left: 10%;
    }

    &::after {
      bottom: 20%;
      right: 20%;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textColor};
    padding: ${({ theme }) => theme.spacing.medium};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  input, textarea {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.textColor};
    padding: ${({ theme }) => theme.spacing.small};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
      box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default GlobalStyle;
