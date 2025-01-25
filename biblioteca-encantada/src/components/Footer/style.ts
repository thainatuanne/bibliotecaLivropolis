import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textColor};
    padding: ${({ theme }) => theme.spacing.small};
    text-align: center;
    font-size: 0.9rem;

    p {
        font-size: 1rem;
        font-weight: bold;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.textColor};
    }
`;
