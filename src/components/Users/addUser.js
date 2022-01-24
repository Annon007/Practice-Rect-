import React from "react";
import Card from "../UI/Card/card";
const AddUser = (props) => {
    const addUserHandeler = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = Object.fromEntries(data);


        console.log(formData);
    }
    return (
        <Card>
            <form onSubmit={addUserHandeler}>
                <label >User name:</label>
                <input type="text" name="userName" />
                <label >Age:</label>
                <input type="number" id="age" name="age" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;