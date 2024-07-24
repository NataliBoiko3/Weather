

export interface IWeather {
  
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

  interface WeatherCardProps {
    weather: IWeather;
  }
  


export default function WeatherCard({weather}:WeatherCardProps) {
  return (
    <div className={""} key={""}></div>
  )
}
