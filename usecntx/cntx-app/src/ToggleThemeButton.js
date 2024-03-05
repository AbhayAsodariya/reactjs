import React from 'react';
import { withStyles } from 'https://cdn.skypack.dev/react-jss@10.5.1';
import { RiMoonClearLine, RiSunLine } from 'https://cdn.skypack.dev/react-icons@4.2.0/ri';
import { toggleThemeButtonStyles } from './styles';

const ToggleThemeButton = withStyles(toggleThemeButtonStyles)(({ classes }) => {
  const { currentTheme, toggleTheme } = useThemeContext();

  return (
    <button className={classes.button} onClick={toggleTheme}>
      {currentTheme === 'light' ? (
        <RiMoonClearLine className={classes.themeIcon} />
      ) : (
        <RiSunLine className={classes.themeIcon} />
      )}
    </button>
  );
});

export default ToggleThemeButton;
