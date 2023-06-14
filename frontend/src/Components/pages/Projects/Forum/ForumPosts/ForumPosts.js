import React, {useState} from "react";
import Post from "../Post/Post";
import Card from "../../../../DesignComponents/Card/Card";
import './ForumPosts.css'

const ForumPosts = (props) =>{

    console.log(props.newData)
    return(
       <div className={'post-content'}>
           {props.newData.map(post =>
                   <Card className={'post-content-card'} >
                       <Post
                           topic={post.topic}
                           img={post.img}
                           tags={post.tags}
                           message={post.message}/>
                   </Card>
           )}
       </div>
    )
}
export default ForumPosts