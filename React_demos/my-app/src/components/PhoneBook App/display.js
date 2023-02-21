import Contact from './Contact'

export default function Display(props) {

       let data=JSON.parse(localStorage.getItem("phoneBookdata"));
    //    console.log("hii from display")
    //    console.log(data)
  


    return (<div>
        <div className='contactContainer'>
        {data!=null && data.map((value,key) => {
            return <Contact name={value.firstName} number={value.contactNumber} />
        })}
        </div>
    </div>);
}