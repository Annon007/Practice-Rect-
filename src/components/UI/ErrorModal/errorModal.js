import React from "react";
import Card from "../Card/card";
import Button from "../Button/button";
import styles from "./errorModal.module.css";
const ErrorModal = props => {
    const closeModal = () =>{
        props.onClose();
    };
    return <div>
        <div className = {styles.backdrop} onClick = {closeModal} />
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick = {closeModal}> Okay </Button>
            </footer>
        </Card>
    </div>
}
export default ErrorModal;