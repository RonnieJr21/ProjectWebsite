import React from "react";
import Avatar from "../Avatar/Avatar";
import './Post.css'

const Post = props =>{

    return(
        <div className={'post'}>
            <span>
                <div className={'user-img'} >
                    <Avatar img={props.img}/>
                </div>
            </span>
            <span>
                <div className={'user-info-container'}>
                    <div className={'user-info'}>
                        <span className={'topic'}>{props.topic} |</span>
                        <span className={'tags'}> {props.tags}</span>
                    </div>
                    <div className={'user-message'}>
                        {props.message}
                    </div>
                </div>
                </span>
        </div>
    )
}
export default Post