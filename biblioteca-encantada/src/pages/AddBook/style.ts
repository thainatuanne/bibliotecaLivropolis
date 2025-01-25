import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: ${({ theme }) => theme.fonts.primary};

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.title};
  }

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textColor};
    padding: ${({ theme }) => theme.spacing.small};
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
