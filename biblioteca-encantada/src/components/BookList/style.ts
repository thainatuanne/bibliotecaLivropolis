import styled from "styled-components";

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 8px;

  article {
    padding: ${({ theme }) => theme.spacing.medium};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 8px;
    background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
    );
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;

    article:hover {
      transform: scale(1.05) rotate(-2deg);
    }

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    h3 {
      margin-bottom: ${({ theme }) => theme.spacing.small};
      font-size: 18px;
      color: ${({ theme }) => theme.colors.title};
    }

    p {
      margin: ${({ theme }) => theme.spacing.small} 0;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.textColor};
    }

    button {
      margin-right: ${({ theme }) => theme.spacing.small};
      padding: ${({ theme }) => theme.spacing.small};
      font-size: 14px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.textColor};
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
