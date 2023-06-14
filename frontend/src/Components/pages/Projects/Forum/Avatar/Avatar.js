import React from "react";
import './Avatar.css'

const Avatar = (props) =>{



    return(
        <div className={'avatar'}>
            <img className={'avatar-img'} src={props.img} alt={'samurai'}/>
        </div>
    )
}
export default Avatar