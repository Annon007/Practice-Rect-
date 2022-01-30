import React from "react";
import ReactDom from "react-dom";
import Card from "../Card/card";
import Button from "../Button/button";
import styles from "./errorModal.module.css";
const BackDrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose} />

}
const Modal = props => {
    return <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onClose}> Okay </Button>
        </footer>
    </Card>
}
const ErrorModal = props => {

    return <>
        {/* creating PORTAL */}
        {ReactDom.createPortal(<BackDrop onClose={props.onClose} />, document.getElementById("backdrop-root"))}
        {ReactDom.createPortal(<Modal title={props.title} message={props.message} onClose={props.onClose} />, document.getElementById("modal-root"))}
    </>
}
export default ErrorModal;