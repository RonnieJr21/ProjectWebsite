import React, {useEffect, useState} from "react";
import Card from "../../../../../DesignComponents/Card/Card";
import imageFile from "../../../../../images/SamuraiG.JPG";
import axios from "axios";
import Avatar from "../../Avatar/Avatar";
import ErrorModal from "../../../../../DesignComponents/ErrorModal/ErrorModal";
import './SignUp.css'
const SignUp = (props) =>{
    const [users, incrementUsers] = useState(0)
    useEffect(()=> {
        const getData = async () =>{
            try {
                const response = await axios.get('http://localhost:5000/api/projects/forum/num-users');
                const responseData = await response;
                incrementUsers(responseData.data.message)

            }catch (e) {console.log(e)}
        }
        getData();
    },[])
    console.log(users)


    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [error, setError] = useState();

    const setBlank = () =>{
        setUsername('');
        setEmail('');
        setPassword('');
        setCountry('');
        setAge('');
        setProfilePicture('');
    }



    const usernameHandler = (event) =>{
        setUsername(event.target.value)
    }

    const emailHandler = (event) =>{
        setEmail(event.target.value)
    }
    const passwordHandler = (event) =>{
        setPassword(event.target.value)
    }
    const ageHandler = (event) =>{
        setAge(event.target.value)

    }
    const countryHandler = (event) =>{
        setCountry(event.target.value)

    }
    const profilePictureHandler = (event) =>{
        setProfilePicture(event.target.value)

    }
    const submitHandler = (event) =>{
        event.preventDefault();


        let newUser = {
            '_id': `${username}-${users}`,
            'username': username,
            'email': email,
            'password': password,
            'age': age,
            'country': country,
            'profilePicture': profilePicture
        }
        localStorage.setItem('logged-in', 'true')

        if(newUser.username.length ===0 ){
            setError({
                message: 'Please enter a topic that is at least 3 characters long',
                title : 'Invalid username length'
            })

            setBlank();
        }
        else if(newUser.password.length < 8){
            setError({
                message: 'Please enter a password using at least 8 characters',
                title : 'Invalid password length '
            })
            setBlank();
        }
        else if(!newUser.email.includes('@')){
            setError({
                message: 'Please enter a valid email address',
                title : 'Invalid E-mail'
            })
            setBlank();
        }
        else{


            axios.post('http://localhost:5000/api/projects/forum/add-user', newUser).then(res=>console.log(res)).catch(err=>console.log(err))
            props.onClick(true)
            setBlank();
        }
    }
    const errorHandler = () =>{
        setError(null);
    }

    // const uploadCourse = (event) => {
    //     setFormData(event.target.files[0])
    // }


    // const fileUploadHandler = async (event) => {
    //     let uploadData;
    //     const fileReader = new FileReader();
    //     fileReader.readAsText(formData, 'utf-8')
    //     fileReader.onload = (event) => {
    //         try {
    //
    //
    //         } catch (e) {
    //             console.error("failed to upload course", e)
    //         }
    //
    //     }
    // }

    return(
        <Card className={'user-signup'}>
            <div className={'profile-picture'}>
                <Avatar img={imageFile}/>
            </div>

            {error && <ErrorModal onAcknowledge={errorHandler} title={error.title} message={error.message}/>}
            <form className={'signup-input'} onSubmit={submitHandler}>


                <div className={'username'}>
                    <label className={'username-label'}>Username</label>
                    <input className={'username-input'} value={username} onChange={usernameHandler} type={"text"}/>
                </div>
                <div className={'email'}>
                    <label className={'email-label'}>Email</label>
                    <input  className={'email-input'} value={email} onChange={emailHandler} type={"text"}/>
                </div>
                <div className={'password'}>
                    <label className={'password-label'}>Password</label>
                    <input placeholder={'Type something cool!'} className={'password-input'} value={password} onChange={passwordHandler} type={"password"}/>
                </div>
                <div className={'age'}>
                    <label className={'age-label'}>Age</label>
                    <input placeholder={'Type something cool!'} className={'age-input'} value={age} min={18} step={1} onChange={ageHandler} type={"number"}/>
                </div>
                {/*<div className={'country'}>*/}
                {/*    <label className={'country-label'}>Country</label>*/}
                {/*    <input placeholder={'Type something cool!'} className={'country-input'} value={country} onChange={countryHandler} type={"radio"}/>*/}
                {/*</div>*/}
                {/*<div className={'profile-picture'}>*/}
                {/*    <label className={'profile-picture-label'}>IMG</label>*/}
                {/*    <input placeholder={'Type something cool!'} className={'profile-picture-input'} value={profilePicture} onChange={profilePictureHandler} type={"image"}/>*/}
                {/*</div>*/}
                <div>
                    <button  className={'form-button'} type={"submit"}>Create Account</button>
                </div>
            </form>
        </Card>
    )
}
export default SignUp