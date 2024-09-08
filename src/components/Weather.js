import React , { useState} from 'react'
import axios from 'axios'

function Weather() {
    const[city,setCity] = useState();
    const [weather,setweather] = useState();
    const cityHandler= (event) => {
        setCity(event.target.value)
    }
    

   const fetchapi = async() => {
      try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${'3e4a2605a1619ac62b936f8cb012120d'}`)
          console.log(response)
          setweather(response);
        }catch(error){
           console.log(`Error while fetching the api:${error}`);
      }
   }
    const searchHandler = () => {
        fetchapi();
    }

  return (
    <div className = "weather-container">
      <input type = "text" placeholder = "Enter City Name" value = {city} onChange = {cityHandler}/>
      <button onClick = {searchHandler}>Get Weather</button>
      {weather && <>
      <div className = "response">
       <h2>City:{weather.data.city.name}</h2>
       <p>Temperature:{weather.data.list[0].main.temp}</p>
       <p>{weather.data.list[0].weather[0].description}</p>
      </div>
        
      </>}
    </div>
  )
}

export default Weather