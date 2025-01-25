import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    max-width: 400px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.large};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: ${({ theme }) => theme.fonts.primary};
`;

export const Input = styled.input`
    padding: ${({ theme }) => theme.spacing.small};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.textColor};
    &:focus {
        outline: none;
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Button = styled.button`
    padding: ${({ theme }) => theme.spacing.small};
    font-size: 16px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }

    &:nth-child(2) {
        background-color: ${({ theme }) => theme.colors.border};
        &:hover {
            background-color: ${({ theme }) => theme.colors.title};
        }
    }
`;
