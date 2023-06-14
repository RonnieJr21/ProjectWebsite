import React, {useEffect, useState} from "react";
import Card from "../../../DesignComponents/Card/Card";
import ForumForm from "./ForumForm/ForumForm";
import ForumPosts from "./ForumPosts/ForumPosts";
import axios from "axios";
import './Forum.css'
import SignUp from "./User/SignUp/SignUp";
import SignUpModal from "./User/SignUp/SignUpModal";
import Login from "./User/Login/Login";
import LoginModal from "./User/Login/LoginModal";

const Forum = () =>{
    // localStorage.clear()
    const [userPosts, addPosts] = useState([]);
    const [formVisible, setFormVisible] = useState(false);
    const [signupVisible, setSignupVisible] = useState(false);
    const [loginVisible, setLoginVisible] = useState(false);
    const [choice, setChoice] = useState(false);
    const [create, setCreate] = useState(true);

    useEffect(()=> {
        const getData = async () =>{
            try {
                const response = await axios.get('http://localhost:5000/api/projects/forum/posts');
                const responseData = await response;
                addPosts(responseData.data[0])
            }catch (e) {console.log(e)}
        }
        getData();
    },[])

    const setFormVisibilityT = () =>{
        setFormVisible(true)

    }

    const forumData = (data) =>{
        addPosts((prevData) =>{
            return[...prevData, data]
        })
    }

    let content = <div className={'forum-posts'}>
                    <ForumPosts newData={userPosts}/>
                </div>
    if(userPosts.length === 0){
        content = <h2 className={'no-posts'}>No posts</h2>
    }

    // const hideSignup = (data) =>{
    //     setSignupVisible(data)
    // }
    // const hideLogin = (data) =>{
    //     setLoginVisible(data)
    // }
    // const logBut = () =>{
    //     setLoginVisible(true)
    //     setChoice(false)
    //     setCreate(true)
    // }
    // const sign_But = () =>{
    //     setSignupVisible(true)
    //     setChoice(false)
    //     setCreate(true)
    // }

    return(
        <div className={'forum-background'}>
            {create && <button onClick={setFormVisibilityT}>Create Post</button>}
            {/*{choice &&*/}
            {/*    <div>*/}
            {/*        <span><button onClick={logBut}>Login</button></span>*/}
            {/*        <span><button onClick={sign_But}>Create Account</button></span>*/}
            {/*    </div>}*/}
            {formVisible &&
                <Card className={'forum-form'}>
                    <ForumForm  onForumData={forumData} />
                </Card>}
            {content}

            {/*{signupVisible && <SignUpModal visibility={hideSignup}/>}*/}
            {/*{loginVisible && <LoginModal visibility={hideLogin}/>}*/}

        </div>
    )
}
export default Forum