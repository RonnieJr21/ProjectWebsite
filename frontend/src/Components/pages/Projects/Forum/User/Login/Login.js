import Card from "../../../../../DesignComponents/Card/Card";
import ErrorModal from "../../../../../DesignComponents/ErrorModal/ErrorModal";
import React, {useState} from "react";
import axios from "axios";


const Login = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    const setBlank = () => {
        setUsername('');
        setEmail('');
        setPassword('');

    }

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }


    const submitHandler = (event) => {
        event.preventDefault();


    let newUser = {
        'username': username,
        'email': email,
        'password': password,

    }

    let searchVariable = newUser.username;
    if (newUser.username.length === 0) {
        setError({
            message: 'Please enter a topic that is at least 3 characters long',
            title: 'Invalid username length'
        })

        setBlank();
    } else if (newUser.password.length < 8) {
        setError({
            message: 'Please enter a password using at least 8 characters',
            title: 'Invalid password length '
        })
        setBlank();
    } else if (!newUser.email.includes('@')) {
        setError({
            message: 'Please enter a valid email address',
            title: 'Invalid E-mail'
        })
        setBlank();
    } else {

        axios.post(`http://localhost:5000/api/projects/forum/${searchVariable}`,newUser)
            .then(res => {if(res.data.code === 205){localStorage.setItem('Authenticated', 'true')}
            else{localStorage.setItem('Authenticated', 'false')}})
            .catch(err =>
                console.log(err))
        props.onClick(true)
        setBlank();
    }}

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Card>
            {error && <ErrorModal onAcknowledge={errorHandler} title={error.title} message={error.message}/>}
            <form className={'signup-input'} onSubmit={submitHandler}>


                <div className={'username'}>
                    <label className={'username-label'}>Username</label>
                    <input className={'username-input'} value={username} onChange={usernameHandler} type={"text"}/>
                </div>
                <div className={'email'}>
                    <label className={'email-label'}>Email</label>
                    <input className={'email-input'} value={email} onChange={emailHandler} type={"text"}/>
                </div>
                <div className={'password'}>
                    <label className={'password-label'}>Password</label>
                    <input placeholder={'Type something cool!'} className={'password-input'} value={password}
                           onChange={passwordHandler} type={"password"}/>
                </div>
                <button type={'submit'}>Login</button>
            </form>
        </Card>
    )
}
export default Login