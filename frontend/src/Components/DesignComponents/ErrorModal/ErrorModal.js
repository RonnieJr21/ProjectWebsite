import React from "react";
import ReactDom from 'react-dom'
import Card from "../Card/Card";
import './ErrorModal.css'

const Backdrop = props =>{
    return (
        <div className={'backdrop'}
             onClick={props.onClick}/>
            )
}

const ModalOverlay = props =>{
    return (
        <Card className={'modal'}>
            <header className={'modal-title-container'}>
                <h2 className={'modal-title'} >{props.title}</h2>
            </header>
            <div className={'modal-message-container'}>
                <p className={'modal-message'}>{props.message}</p>
            </div>
            <footer className={'actions'}>
                <button onClick={props.onClick} className={'modal-button'}>I Acknowledge</button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) =>{
    return(
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onClick={props.onAcknowledge}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onAcknowledge}/>, document.getElementById('overlay-root'))}

        </React.Fragment>
    )
}
export default ErrorModal