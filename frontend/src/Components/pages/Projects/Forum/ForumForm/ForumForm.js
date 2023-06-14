import React, {useState} from "react";
import Avatar from "../Avatar/Avatar";
import axios from "axios";

import './ForumForm.css'
import ErrorModal from "../../../../DesignComponents/ErrorModal/ErrorModal";
const imageFile = require('../../../../images/SamuraiG.JPG')

const ForumForm = (props) =>{
    const [topic, setTopic] = useState('');
    const [tags, setTags] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState();
    const setBlank = () =>{
        setTopic('');
        setTags('');
        setMessage('');
    }



    const topicHandler = (event) =>{
        setTopic(event.target.value)
    }

    const tagHandler = (event) =>{
        setTags(event.target.value)
    }

    const messageHandler = (event) =>{
        setMessage(event.target.value)

    }
    const submitHandler = (event) =>{
        event.preventDefault();


        let newPost = {
            'username': 'ronnie',
            'topic': topic,
            'tags': tags,
            'message': message,
            'img': imageFile
        }

        if(newPost.topic.length < 3){
            setError({
                message: 'Please enter a topic that is at least 3 characters long',
                title : 'Invalid topic length'
            })

            setBlank();
        }
        else if(!newPost.tags.includes("#")){
            setError({
                message: 'Please enter a valid tag containing the \'#\' sign',
                title : 'Invalid Tag '
            })
            setBlank();
        }
        else{
            props.onForumData(newPost)

            axios.post('http://localhost:5000/api/projects/forum/add-post', newPost).then(res=>console.log(res)).catch(err=>console.log(err))
            setBlank();


        }
    }
    const errorHandler = () =>{
        setError(null);
    }

    return(
        <div className={'form-content'}>
            <div className={'avatar-img-form'}>
                <Avatar img={imageFile}/>
            </div>

            {error && <ErrorModal onAcknowledge={errorHandler} title={error.title} message={error.message}/>}
            <form className={'form-input'} onSubmit={submitHandler}>


                <div className={'topic'}>
                    <label className={'topic-label'}>Topic</label>
                    <input className={'topic-input'} value={topic} onChange={topicHandler} type={"text"}/>
                </div>
                <div className={'tag'}>
                    <label className={'tag-label'}>Tags</label>
                    <input  className={'tag-input'} value={tags} onChange={tagHandler} type={"text"}/>
                </div>
                <div className={'message'}>
                    <label className={'message-label'}>Message</label>
                    <input placeholder={'Type something cool!'} className={'message-input'} value={message} onChange={messageHandler} type={"text"}/>
                </div>
                <div>
                    <button className={'form-button'} type={"submit"}>Add Post</button>
                </div>
            </form>
        </div>
    )
}
export default ForumForm