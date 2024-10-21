import React, { useState } from "react";
import "./Login.scss";
import axios from "axios"; 

const mode = 'login';

const LoginComponent = ({ mode: propMode, onSubmit }) => {
    const [mode, setMode] = useState(propMode);
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        createpassword: '',
        repeatpassword: ''
    });

    const toggleMode = () => {
        const newMode = mode === 'login' ? 'signup' : 'login';
        setMode(newMode);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData); 
        setFormData({
            fullname: '',
            email: '',
            createpassword: '',
            repeatpassword: ''
        });
        
        axios.post('http://localhost:8000/faculty', formData)
            .then(response => {
                console.log('Data sent to server:', response.data);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${mode}`} ></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1 className="text-center">{mode === 'login' ? 'Welcome back Sir/Medam!' : 'Faculty Sign up'}</h1>
                    <div className="form-block__toggle-block">
                        <span>{mode === 'login' ? 'Don\'t' : 'Already'} have an account? Click here &#8594;</span>
                        <input id="form-toggler" type="checkbox" onClick={toggleMode} />
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <LoginForm mode={mode} onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
            </section>
        </div>
    );
};

const LoginForm = ({ mode, onSubmit, onChange, formData }) => (
    <form onSubmit={onSubmit}>
        <div className="form-block__input-wrapper">
            <div className="form-group form-group--login">
                <Input type="text" id="username" label="user name" value={formData.username} onChange={onChange} disabled={mode === 'signup'} />
                <Input type="password" id="password" label="password" value={formData.password} onChange={onChange} disabled={mode === 'signup'} />
            </div>
            <div className="form-group form-group--signup">
                <Input type="text" id="fullname" label="full name" value={formData.fullname} onChange={onChange} disabled={mode === 'login'} />
                <Input type="email" id="email" label="email" value={formData.email} onChange={onChange} disabled={mode === 'login'} />
                <Input type="password" id="createpassword" label="password" value={formData.createpassword} onChange={onChange} disabled={mode === 'login'} />
                <Input type="password" id="repeatpassword" label="repeat password" value={formData.repeatpassword} onChange={onChange} disabled={mode === 'login'} />
            </div>
        </div>
        <button className="button button--primary full-width" type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
    </form>
);

const Input = ({ id, type, label, value, onChange, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} value={value} onChange={onChange} disabled={disabled} />
);

const Flogin = () => (
    <div className={`app app--is-${mode}`}>
        <LoginComponent
            mode={mode}
            onSubmit={(data) => {
                console.log('submit', data);
            }}
        />
    </div>
);

export default Flogin;
