import { useState } from "react";

function LuckyNumber(){
     
    const[luckyNumber,setLuckyNumber]=useState();
    var i=0;

    function generate(){
        if(i==0){
            setLuckyNumber(Math.ceil(Math.random()*10));
            i++;
        }
        else{

        }
        
        // document.getElementById("btn").disabled=true;
        let btn=document.getElementById("btn");
        btn.removeEventListener("onClick",generate);

    }
    return (
        <div>
            {luckyNumber>0 && <h1>Your Lucky number is {luckyNumber}</h1>}
            <button type="Button" id="btn" onClick={generate}>Generate Random number</button>
        </div>
    );
}
export default function LuckyNumber1(){
    return(
        <h1>Hii I am from Lucky number version2</h1>
    );
}
export {LuckyNumber};