import React from 'react';
import { withStyles } from 'https://cdn.skypack.dev/react-jss@10.5.1';
import { loginLayoutStyles } from './styles';
import ToggleThemeButton from './ToggleThemeButton';

const LoginLayout = withStyles(loginLayoutStyles)(({ classes, children }) => {
  return (
    <div className={classes.loginLayout}>
      <div className={classes.rightAngleAction}>
        <ToggleThemeButton size={'2.2em'} transparent />
      </div>
      {children}
    </div>
  );
});

export default LoginLayout;
