


import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

interface IWeather {
  id: number,
    name: string,
  weaher:{
id: number,
 main:string,
description: string,
icon: string,
  }[]
temp: {
  
feels_like: number,
temp_min: number,
temp_max:number,
pressure:number,
sea_level: number,
grnd_level:number
}
,

}



const initialData:IWeather = {
  id: 0,
  name: "",
 
  weaher:[{
id: 0,
 main:"",
description:"",
icon: "",
  }],
temp: {
  
feels_like:0,
temp_min: 0,
temp_max:0,
pressure:0,
sea_level: 0,
grnd_level:0
}
,

}




export default function WeatherApp() {

  // const { id } = useParams();
const [weatherApp,setWeaherApp] = useState<IWeather>(initialData)
const [name,setName] = useState<String>

    useEffect(()=> {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=leipzig&appid=b5ba87a07036011304fcc68827254b68')
  .then(res => res.json())
  .then(data => setWeaherApp(data)
  
    )

}, [])


  return (
    <div>
      {/* <h3>{weatherApp.weaher}</h3>
       <p>{weatherApp.temp}</p>
       <img src={weatherApp.image} width={200} alt="" /> */}
     <div>
      <MyButton/>
     </div>
     <div>
      <MyInput/>
      </div>
    </div>
  )
}

    
