import { shared } from "./shared";

export const lightTheme = {
    colors: {
        ...shared,
        primary: '#A3C6C4',         
        secondary: '#D9CAB3',      
        backgroundColor: '#F6F5F3', 
        textColor: '#4F4F4F',       
        title: '#2E2E2E',           
        border: '#CCCCCC',        
        padding: "16px",
    },
    spacing: shared.spacing,
    fonts: shared.fonts,
    breakpoints: shared.breakpoints,
};
