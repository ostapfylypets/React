import {useEffect, useState} from "react";
import './Users.css'
import User from "../user/user";
import axios from '../../services/api';
export default function Users() {
    let [users, setUsers] = useState([])
    let [simpleUsers, setSimpleUsers] = useState([])

    useEffect(() => {
axios.get('/users').then(value =>setUsers ([...value.data]));
    }, []);

    const search = (id) => {
        let find = users.find(value => value.id === id)
        setSimpleUsers(find)
    }
    return (
        <div className={'wrap'}>
            <div className={'users-box'}>
                {
                    users.map((value) => <User key={value.id} search={search} item={value}/>)
                }

            </div>
            <div className={'single-user-box'}>
                {simpleUsers ? (<h2>{simpleUsers.id}-{simpleUsers.name}</h2>) : (<div> no info </div>)}
            </div>
        </div>
    );
}