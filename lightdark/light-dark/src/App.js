import React, { useState, createContext, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaChessBishop, FaPlusCircle, FaArrowLeft } from "react-icons/fa";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { ThemeProvider, withStyles } from "react-jss";
import "./App.css";

const mainTheme = {
  sizes: {
    container: "850px",
  },
  colors: {
    primary: "#4299e1",
    primaryLight: "#fff",
    secondary: "#818CF8",
    secondaryLight: "#fff",
    green: "#10B981",
  },
};

const lightTheme = {
  ...mainTheme,
  type: "light",
  background: {
    default: "#f7fafc",
    paper: "#fff",
    linkHover: "#edf2f7",
    input: "#fff",
  },
  alert: {
    error: "#fff0f3",
    success: "#a7f3d0",
  },
  border: {
    primary: "#e2e2e2",
    input: "#e2e8f0",
  },
  progress: {
    linear: "#e6fffa",
    linearBar: "#bde8e0",
  },
  text: {
    primary: "#000",
    link: "#718096",
    activeLink: "#2b3044",
    outlinedButton: "#4c4f52",
    input: "#4a5568",
  },
  snackbar: {
    background: "#323232",
    text: "#fff",
  },
  blob: "C7D2FE",
};

const darkTheme = {
  ...mainTheme,
  type: "dark",
  background: {
    default: "#161a23",
    paper: "#252836",
    linkHover: "#1c2633",
    input: "#2d303e",
  },
  alert: {
    error: "#a54a5c",
    success: "#359a6c",
  },
  border: {
    primary: "#43454e",
    input: "#505261",
  },
  progress: {
    linear: "#588e83",
    linearBar: "#32695f",
  },
  text: {
    primary: "#fff",
    link: "#8493a9",
    activeLink: "#9b9fb1",
    outlinedButton: "#fff",
    input: "#cccede",
  },
  snackbar: {
    background: "#fff",
    text: "#000",
  },
  blob: "6373b3",
};

const loginLayoutStyles = (theme) => ({
  loginLayout: {
    maxWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `${theme.background.default} url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 200 200" xml:space="preserve" height="800px" width="800px"><g><path fill="%23${theme.blob}" d="M41.3,-52.9C54.4,-47.3,66.6,-36.4,73.8,-22.1C81,-7.8,83.2,10,75.4,21.7C67.7,33.4,50.1,39.1,35.9,47.5C21.7,56,10.8,67.3,0,67.3C-10.8,67.3,-21.6,55.9,-35.7,47.4C-49.9,38.9,-67.3,33.2,-70,23.2C-72.7,13.1,-60.6,-1.3,-53.8,-15.9C-46.9,-30.5,-45.3,-45.3,-37.2,-52.5C-29.1,-59.7,-14.6,-59.4,-0.2,-59.1C14.1,-58.7,28.2,-58.5,41.3,-52.9Z" transform="translate(100 100) scale(1.21)" fill-rule="nonzero"/></g></svg>') 50% no-repeat`,
  },
  rightAngleAction: {
    position: "absolute",
    top: "10px",
    right: "20px",
  },
});

const loginPageStyles = (theme) => ({
  "@keyframes slideLeft": {
    from: {
      opacity: 0,
      transform: "translateX(30px) scale(0.98)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0px) scale(1)",
    },
  },
  loginCard: {
    animation: "$slideLeft ease-in 0.3s",
    boxShadow: "0 2px 20px 3px rgb(0 0 0 / 6%)",
    background: theme.background.paper,
    color: theme.text.primary,
    width: "410px",
    padding: "2rem",
    position: "relative",
  },
  forgotPassLink: {
    color: theme.text.activeLink,
    textDecoration: "none",
    fontSize: "0.9em",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cardHeader: {
    color: theme.text.activeLink,
    fontWeight: 600,
    fontSize: "1.6em",
  },
});

const ToggleButton = () => {
  const { toggleTheme, theme } = useTheme();
  const backgroundColor = theme.type === "light" ? "#fff" : "#161a23";

  return (
    <button onClick={toggleTheme} style={{ backgroundColor }}>
      Toggle Theme
    </button>
  );
};

const buttonStyles = (theme) => ({
  buttonMain: {
    width: (props) => (props.fullWidth ? "100%" : "auto"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    paddingTop: ".75rem",
    paddingBottom: ".75rem",
    background: (props) => {
      if (props.color) return theme.colors[props.color];
      return theme.colors.primary;
    },
    borderRadius: ".25rem",
    border: "none",
    color: "#fff",
    fontFamily: "inherit",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(90%)",
    },
    "&:focus": {
      boxShadow: (props) => {
        if (props.color) return `0 0 0 3px ${theme.colors[props.color] + "42"}`;
        return `0 0 0 3px ${theme.colors.primary + "42"}`;
      },
      outlineColor: "rgba(0,0,0,0)",
      outlineOffset: "2px",
      outlineStyle: "solid",
      outlineWidth: "2px",
    },
  },
  buttonIcon: {
    marginRight: "5px",
  },
  buttonOutlined: {
    background: "none",
    border: (props) => {
      if (props.color) return `1px solid ${theme.colors[props.color]}`;
      return `1px solid ${theme.colors.primary}`;
    },
    color: (props) => {
      if (props.color) return theme.colors[props.color];
      return theme.colors.primary;
    },
    "&:hover": {
      background: (props) => {
        if (props.color) return theme.colors[props.color] + "0d";
        return theme.colors.primary + "0d";
      },
    },
  },
  buttonDisabled: {
    filter: "brightness(70%)",
    cursor: "not-allowed",
    "&:hover": {
      filter: "brightness(70%)",
    },
  },
});

const inputStyles = (theme) => ({
  inputMain: {
    width: (props) => (props.fullWidth ? "100%" : "auto"),
    padding: ".6rem 1rem",
    border: `1px solid ${theme.border.input}`,
    borderRadius: ".25rem",
    background: theme.background.input,
    color: theme.text.input,
    fontFamily: "inherit",
    outline: "none",
    "&::placeholder": {
      color: theme.text.input,
    },
    "&:focus": {
      border: `1px solid ${theme.colors.primary}`,
    },
  },
});

const SnackbarContext = createContext();

const useSnackbar = () => useContext(SnackbarContext);

const SnackbarProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const showMessage = (text) => {
    setMessage(text);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <SnackbarContext.Provider value={showMessage}>
      {children}
      {open && <Snackbar message={message} />}
    </SnackbarContext.Provider>
  );
};

const Snackbar = ({ message }) => {
  const classes = snackbarStyles();
  return <div className={classes.snackbar}>{message}</div>;
};

const snackbarStyles = withStyles((theme) => ({
  snackbar: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "1rem 2rem",
    background: theme.snackbar.background,
    color: theme.snackbar.text,
    borderRadius: ".25rem",
    boxShadow: "0 2px 20px 3px rgb(0 0 0 / 6%)",
    zIndex: 9999,
  },
}));

const Button = withStyles(buttonStyles)(({ classes, children, ...rest }) => (
  <button className={classes.buttonMain} {...rest}>
    {children}
  </button>
));

const Input = withStyles(inputStyles)(({ classes, ...rest }) => (
  <input className={classes.inputMain} {...rest} />
));

const LoginPage = withStyles(loginPageStyles)(({ classes }) => (
  <div className={classes.loginCard}>
    <ToggleButton />
    <h2 className={classes.cardHeader}>Login</h2>
    <form>
      <div style={{ marginBottom: "1rem" }}>
        <Input placeholder="Username" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Input type="password" placeholder="Password" />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <Button fullWidth>Login</Button>
      </div>
    </form>
    <div style={{ marginTop: "1rem" }}>
      <a href="#" className={classes.forgotPassLink}>
        Forgot Password?
      </a>
    </div>
  </div>
));

const LoginLayout = withStyles(loginLayoutStyles)(({ classes }) => (
  <div className={classes.loginLayout}>
    <div>
      <LoginPage />
    </div>
  </div>
));

const Themes = { light: lightTheme, dark: darkTheme };

const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={Themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const CustomButton = ({ children, ...rest }) => {
  const { theme } = useTheme();
  return <Button {...rest}>{children}</Button>;
};

const CustomInput = (props) => {
  const { theme } = useTheme();
  return <Input {...props} />;
};

const CustomLoginPage = () => {
  const { theme } = useTheme();
  return <LoginPage />;
};

const CustomLoginLayout = () => {
  const { theme } = useTheme();
  return <LoginLayout />;
};

const App = () => {
  return (
    <>
      <ThemeProviderComponent>
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <LoginLayout>
                    <LoginPage />
                  </LoginLayout>
                }
              />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProviderComponent>
    </>
  );
};

export default App;
