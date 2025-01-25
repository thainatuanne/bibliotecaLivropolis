import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./types/global";
import { lightTheme, darkTheme } from "./themes";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes";
import { BookProvider } from "./hooks/BookProvider";
import { ThemeToggleButton } from "./components/ButtonTheme/style";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BookProvider>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? "🌙" : "☀️"}
        </ThemeToggleButton>
        <RouterProvider router={AppRouter} />
      </BookProvider>
    </ThemeProvider>
  );
}

export default App;

