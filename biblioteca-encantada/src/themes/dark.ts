import { shared } from "./shared";

export const darkTheme = {
    colors: {
        ...shared, 
        primary: '#78A1BB',       
        secondary: '#8C8A93',      
        backgroundColor: '#1E1E2C',
        textColor: '#EAEAEA',      
        title: '#D6D5E7',         
        border: '#404040',           
        padding: "16px",
    },
    spacing: shared.spacing,
    fonts: shared.fonts,
    breakpoints: shared.breakpoints,
};