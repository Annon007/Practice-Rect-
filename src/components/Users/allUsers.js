import React from "react";
import styles from "./allUsers.module.css"
import Card from "../UI/Card/card";
const AllUsers = props => {
    if (!props.users) {
        return <p className={styles.noUser}>There are no users!</p>
    }
    return <Card className={props.users ? styles.users : ""}>
        <ul>
            {props.users && props.users.map((user, i) => {
                return <li key={i}>
                    {user.userName} ({user.age} Years Old)
                </li>
            })}
        </ul>
    </Card>
};

export default AllUsers;