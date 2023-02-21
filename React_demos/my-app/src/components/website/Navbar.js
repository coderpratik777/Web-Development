
import './navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){

    return(
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <Link to="/weather"><li>Weather</li></Link>
            </ul>
        </div>
    );

}