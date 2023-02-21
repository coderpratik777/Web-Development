import './header.css'
import Navbar from './Navbar';

export default function Header(){
    return(
        <>
        <Navbar/>
        <div className="header">
            <h1>My website</h1>
        </div>
        </>
    );
}