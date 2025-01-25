import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            backgroundColor: string;
            textColor: string;
            title: string;
            border: string;
            padding: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
        fonts: {
            primary: string;
            secondary: string;     
        };
        breakpoints: {
            mobile: string;
            tablet: string;
            desktop: string;
            largeDesktop: string;
        };
    }
}