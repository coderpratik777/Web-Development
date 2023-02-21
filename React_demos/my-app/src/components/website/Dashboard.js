
export default function Dashboard(){
    return(
        <div style={{color:"white"}}>
            <h1>Welcome back {sessionStorage.getItem("loggedinUser").toUpperCase()}</h1>
        </div>
    );
 }