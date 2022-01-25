import React from "react";
import Card from "../UI/Card/card";
import Button from "../UI/Button/button";

import styles from "./addUser.module.css"
const AddUser = (props) => {
    const addUserHandeler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data);

        
        if(!formData.userName || !formData.age) return;
        if(+formData.age<1) return;

        e.target.reset();
        props.onGetUser(formData);
        

    }
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandeler}>
                <label >User name:</label>
                <input type="text" name="userName" />
                <label >Age:</label>
                <input type="number" id="age" name="age" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;