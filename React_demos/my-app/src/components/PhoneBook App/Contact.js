
import './contact.css'

export default function Contact(props){

    function removeContact(){
        let data=JSON.parse(localStorage.getItem("phoneBookdata"));
    }

    return(<div className="box">
        <h3>{props.name}</h3>
        <p>{props.number}</p>
        <button onclick={removeContact}>Delete</button>
    </div>);
}