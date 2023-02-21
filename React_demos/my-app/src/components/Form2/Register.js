import './Register.css'
import { useState } from 'react'

export default function Register() {

    const [userdata, setUserdata] = useState({
        name: '',
        email: '',
        mobileNumber: '',
        username: '',
        password: ''
    })


    function inputReceived(event) {
        // console.log(event.target.name,event.target.value);
        setUserdata((prevValues) => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value
            }
        });
    }

    function register(event) {
        event.preventDefault();
        console.log(userdata);

    }
    function clear() {
        console.log(userdata);
        setUserdata({
            name: '',
            email: '',
            mobileNumber: '',
            username: '',
            password: ''

        })

    }

    return (
        <form onSubmit={register}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"  value={userdata.name} onChange={inputReceived} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"  value={userdata.email} onChange={inputReceived} />
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input id="mobileNo" type="text" name="mobileNumber"value={userdata.mobileNumber}  onChange={inputReceived} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={userdata.username} onChange={inputReceived} />
            <label htmlFor="password">Enter Password</label>
            <input type="password" name="password" value={userdata.password} onChange={inputReceived} />
            <button type="submit">Register</button>
            <button type="reset" onClick={clear}>Reset</button>

        </form>
    );
}