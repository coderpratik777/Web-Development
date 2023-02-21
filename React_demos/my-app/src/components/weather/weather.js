import { useState } from 'react'
import axios from 'axios';

export default function Weather() {

    const [cityName, setcityname] = useState('');
    const [weatherdata,setData]=useState([]);
    function update(event) {
        setcityname(event.target.value);
        console.log(cityName);
    }
    function fetch(event){
        event.preventDefault();
        let key = "138b91f7502c917df454a94449df5c18";
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

        axios.get(url).then((response)=>{

            setData(response.data);
            console.log(weatherdata);
        })

    }

    return (
        <div>
            <form onSubmit={fetch}>
                <label htmlfor="cityname">Enter city name :</label>
                <input type="text" name="cityname" onChange={update}></input>
                <button type='fetch'>Fetch Weather</button>
                {/* {
                    weatherdata.map((index,data)=>{
                        
                    })
                } */}
                {weatherad}

                
            </form>
        </div>
    );
}