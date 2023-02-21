
import './contact.css'

export default function Contact(props){
    return(<div className="box">
        <h3>{props.name}</h3>
        <p>{props.number}</p>
    </div>);
}