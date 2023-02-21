import { useState } from "react";
import Addcontact from "./Addcontact";
import Display from "./display";
import './header.css'
import Search from "./search";

export default function Header(){
    const[search,setSearch]=useState('');
    const[click,setClick]=useState(false);
    function changeState(){
       setClick(true);
    }
    function inputReceived(event){
        setSearch(event.target.value);
    }
    
    
    return(
        <div className="main">
            <h1>Phone Book App</h1> 
            <div className="main2">
                <h2>Contacts</h2>
                <button onClick={changeState}>+ Add Contact</button>
            </div>
            <div className="searchBar">
               <input type="text" placeholder="search" onChange={inputReceived}></input>
               <Search searchtext={search}/>
            </div>
            <div className="display">
                <Display/>
            </div>
            {click && <Addcontact closeModal={setClick}/>}
        </div>
        
        
    );
}