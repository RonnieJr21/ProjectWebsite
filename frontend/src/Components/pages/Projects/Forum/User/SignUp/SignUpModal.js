import React from "react";
import ReactDom from 'react-dom'
import Card from "../../../../../DesignComponents/Card/Card";
import SignUp from "./SignUp";
import './SignUpModal.css'
const Backdrop = props =>{
    return (
        <div className={'backdrop'}
             onClick={props.onGetStatus}/>
    )
}

const ModalOverlay = props =>{

    return (
        <Card className={'modal'}>
            <SignUp onClick={props.onGetStatus}  />

        </Card>
    )
}

const SignUpModal = (props) =>{
    const setVisibility = () =>{
        props.visibility(false)
    }

    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onGetStatus={setVisibility}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay onGetStatus={setVisibility}/>, document.getElementById('overlay-root'))}

        </React.Fragment>
    )
}
export default SignUpModal