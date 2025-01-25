import styled from "styled-components";

export const FormWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-family: ${({ theme }) => theme.fonts.primary};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

  h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  button {
    align-self: flex-end;
    padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
