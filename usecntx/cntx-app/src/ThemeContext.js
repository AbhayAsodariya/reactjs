import { createContext, useContext, useState } from 'react';

const CustomThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    let newValue = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newValue);
  };

  const themeData = { currentTheme, toggleTheme };

  return (
    <CustomThemeContext.Provider value={themeData}>
      {children}
    </CustomThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(CustomThemeContext);
};

export { CustomThemeProvider, useThemeContext };
