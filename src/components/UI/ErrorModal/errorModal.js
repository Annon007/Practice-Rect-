import React from "react";
import Card from "../Card/card";
import Button from "../Button/button";
import styles from "./errorModal.module.css";
const ErrorModal = props => {
    return <div>
        <div className={styles.backdrop} onClick={_ => { props.onClose() }} />
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={_ => { props.onClose() }}>Okay</Button>
            </footer>
        </Card>
    </div>
}
export default ErrorModal;