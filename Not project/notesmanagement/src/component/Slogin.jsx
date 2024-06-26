import React, { useState } from "react";
import "./Login.scss";

const mode = 'login';

const LoginComponent = ({ mode: propMode, onSubmit }) => {
    const [mode, setMode] = useState(propMode);

    const toggleMode = () => {
        const newMode = mode === 'login' ? 'signup' : 'login';
        setMode(newMode);
    };

    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1 className="text-center">{mode === 'login' ? 'Welcome back Student!' : 'Student Sign up'}</h1>
                    <div className="form-block__toggle-block">
                        <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode} />
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <LoginForm mode={mode} onSubmit={onSubmit} />
            </section>
        </div>
    );
};

const LoginForm = ({ mode, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <div className="form-block__input-wrapper">
            <div className="form-group form-group--login">
                <Input type="text" id="username" label="user name" disabled={mode === 'signup'} />
                <Input type="password" id="password" label="password" disabled={mode === 'signup'} />
            </div>
            <div className="form-group form-group--signup">
                <Input type="text" id="fullname" label="full name" disabled={mode === 'login'} />
                <Input type="email" id="email" label="email" disabled={mode === 'login'} />
                <Input type="password" id="createpassword" label="password" disabled={mode === 'login'} />
                <Input type="password" id="repeatpassword" label="repeat password" disabled={mode === 'login'} />
            </div>
        </div>
        <button className="button button--primary full-width" type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
    </form>
);

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} />
);

const Slogin = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={() => {
                console.log('submit');
            }}
        />
    </div>
);

export default Slogin;
