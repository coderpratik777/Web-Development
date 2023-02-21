import { useState } from "react";

export default function Addcontact(props) {


    const [data, setContactData] = useState({
        firstName:'',
        lastName:'',
        number:''
    });

    function inputReceived(event) {
        // console.log(event.target.name,event.target.value);
        setContactData((prevValues) => {
            return {
                ...prevValues,
                [event.target.name]: event.target.value
            }
        });
    }

    function addData(event){
        event.preventDefault();
        let prevData=JSON.parse(localStorage.getItem("phoneBookdata"))|| [];
        prevData.push(data);
        localStorage.setItem("phoneBookdata",JSON.stringify(prevData));
        props.closeModal(false);
    }



    return (
        <div className="container1">
            <div className="container2">
            <form onSubmit={addData}>
                <input type="text" name="firstName" placeholder="First name"  onChange={inputReceived}/>
                <input type="text" name="lastName" placeholder="Last name" onChange={inputReceived} />
                <input type="number" name="contactNumber" placeholder="contact number"  onChange={inputReceived}/>
                <button> Add Contact</button>
            </form>
            </div>
        </div>);
};