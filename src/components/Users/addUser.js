import React, { useState } from "react";
import Card from "../UI/Card/card";
import Button from "../UI/Button/button";
import ErrorModal from "../UI/ErrorModal/errorModal";
import styles from "./addUser.module.css"
const AddUser = (props) => {
    const [error, setError] = useState(undefined);
    const addUserHandeler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data);


        if (!formData.userName || !formData.age) {
            setError({
                title: "Invalid input.",
                message: "Please enter a valid Name & Age (non empty values)."
            })
            return;
        }
        if (+formData.age < 1) {
            setError({
                title: "Invalid age.",
                message: "Please enter a valid  Age (non empty values & >0)."
            })
            return;
        }

        props.onGetUser(formData);
        e.target.reset();


    };

    const errorHandeler = () => {
        setError(undefined);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} onClose={errorHandeler} message={error.message} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandeler}>
                    <label >User name:</label>
                    <input type="text" name="userName" />
                    <label >Age:</label>
                    <input type="number" id="age" name="age" />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;