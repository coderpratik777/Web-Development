import './hello.css'

export default function hello(props){
    return(
        <div>
            Hello {props.name} and I know this year you complete {props.age}!
        </div>
    )
}