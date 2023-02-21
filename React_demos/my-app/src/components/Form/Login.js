import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login() {

    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    // const [username,setUsername]=useState();
    // const [password,setPassword]=useState();
    const [display, setDisplay] = useState(false);
    // const [passworDummy,setDummy]=useState("");

    function usernameInput(event) {
        setUserData({
            username: event.target.value,
            password: userData.password
        })
        // let name = event.target.value.toUpperCase();
        // setUsername(name);
        // console.log(event);
        // console.log('input received...'+event.target.value);
    }
    function passwordInput(event) {
        setUserData({
            username: userData.username,
            password: event.target.value
        })
        // setDummy(passworDummy+'*');
        // setPassword(event.target.value);
        // console.log(event);
        // console.log('input received...'+event.target.value);
    }

    function login(event) {
        event.preventDefault();
        // let name=document.getElementById("username").value;
        // let password=document.getElementById("password").value;
        // setUsername(name);
        // setPassword(password);
        // let name=username.toUpperCase();
        // setUsername(name);
        // let string=password.replace(/./g,"*");
        // console.log(string);
        // setPassword(string);
        // console.log(userData.username+" "+userData.password);
        sessionStorage.setItem("loggedinUser", userData.username);
        if (userData.username == 'pratik' && userData.password == '1234') {
            navigate('/dashboard');
        }
        else {
            setMessage("Invalid username/password");
        }

        setDisplay(true);
    }

    return (
        <>

            <form onSubmit={login}>
                <h3 style={{color:"red"}}>{message}</h3>
                <label htmlFor="username">Enter Username</label>
                <input id="username" type="text" name="username" onChange={usernameInput} required/>
                <label htmlFor="password">Enter Password</label>
                <input id="password" type="password" name="password" onChange={passwordInput} required/>
                <button type="submit" onClick={login}>Login</button>
                {display == true && <p>Username is {userData.username} and password is {userData.password}</p>}

            </form>
        </>
    )
}
export default Login;