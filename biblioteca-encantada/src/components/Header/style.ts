import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const textGlow = keyframes`
  0% {
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary}, 0 0 10px ${({ theme }) => theme.colors.primary};
  }
  50% {
    text-shadow: 0 0 15px ${({ theme }) => theme.colors.secondary}, 0 0 30px ${({ theme }) => theme.colors.primary};
  }
  100% {
    text-shadow: 0 0 5px ${({ theme }) => theme.colors.secondary}, 0 0 10px ${({ theme }) => theme.colors.primary};
  }
`;

export const Wrapper = styled.header`
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  background-size: 200% 200%;
  animation: ${gradientAnimation} 6s infinite;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  z-index: 1;

  h1 {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    animation: ${floatAnimation} 3s infinite ease-in-out, ${textGlow} 2s infinite alternate;
    color: ${({ theme }) => theme.colors.textColor};
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1) rotate(-2deg);
    }
  }

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.textColor};
    animation: ${floatAnimation} 4s infinite ease-in-out;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.3) rotate(10deg);
    }
  }
`;

export const MagicParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;

  &::before, &::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    background: ${({ theme }) => theme.colors.title};
    filter: blur(100px);
    opacity: 0.7;
    animation: ${floatAnimation} 6s infinite alternate;
  }

  &::before {
    top: 10%;
    left: 20%;
  }

  &::after {
    bottom: 10%;
    right: 20%;
  }
`;
