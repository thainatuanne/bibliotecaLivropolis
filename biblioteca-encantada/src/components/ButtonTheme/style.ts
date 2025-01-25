import styled from "styled-components";

export const ThemeToggleButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
