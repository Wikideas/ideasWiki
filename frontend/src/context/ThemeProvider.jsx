import React, { createContext, useContext, useState } from 'react';

const themeStyles = {
  dark: {
    background: '#141E25',
    textColor: '#EBF7F8',
    buttonColor: '#CAFF42',
    buttonColorText: '#121212',
    searchColor: '#EBF7F8',
    searchColorText:'#121212',
  },
  light: {
    background: '#f5f7f8',
    textColor: '#121212',
    buttonColor: '#141E25',
    buttonColorText: '#EBF7F8',
    searchColor: '#D0E0EB',
    searchColorText:'#49708A',
  }
}

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('ligth');
  const toggleTheme = () => theme === 'ligth' ? setTheme('dark') : setTheme('ligth'); 
  const value = { theme: themeStyles[theme], toggleTheme, themeName: theme };

  return (
    <ThemeContext.Provider value={value}>
      { children }
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider as default, useTheme}; 