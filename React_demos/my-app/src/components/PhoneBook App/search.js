

export default function Search(props){

    let data=JSON.parse(localStorage.getItem("phoneBookdata"));

    return(<div>
        {data!=null && data.map((val,key)=>{
            if(val.firstName===props.searchtext)
              return <div>
                <p>data found</p>
                <h2>{val.firstName}</h2>
                <p>{val.contactNumber}</p>
              </div>
        })}

    </div>);
}