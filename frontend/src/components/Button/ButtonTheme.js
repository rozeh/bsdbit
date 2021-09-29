import { ThemeProvider } from "styled-components";

export const MainColorTheme = (children) => (
    <ThemeProvider theme={{
        palette: {
            blue: '#228be6',
            gray: '#495057',
            pink: '#f06595'
        }
    }} >
        {children}
    </ThemeProvider>
)