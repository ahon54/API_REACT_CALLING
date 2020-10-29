import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export const Api = (props) => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://api.randomuser.me/')
            .then(res => {
                setUsers(res.data.results[0])
            }).catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <ul>
                {
                <li>{users.gender},{users.nat},{users.email}</li>
                }
            </ul>
        </div>
    )
}

export default Api;
