const input=document.querySelector(".input");
const serachbtn=document.getElementById("searchbtn");
const weatherimage = document.querySelector(".weatherimage");
const temp =document.querySelector(".temp");
const description =document.querySelector(".description");
const humidity= document.getElementById("humidity");
const wind_speed =document.getElementById("wind_speed");
const location_error =document.querySelector(".location_error");
const weather_body =document.querySelector(".weather_body")
async function checkweather(city){
    const api_key="ec27167d5d0a9b2e13a2245ecd837736"
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data=await fetch(`${url}`).then(response=>response.json());
    if(weather_data.cod ===`404`){
        location_error.style.display="flex";
        weather_body.style.display="none"
        input.value="";
        console.log("error")
        return;
    }
    
    weather_body.style.display="flex";
    location_error.style.display="none";
    

    temp.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherimage.src="/image/cloud.png";
            break;
        case 'Clear':
            weatherimage.src="/image/clear.png";
            
            break;
        case 'Rain':
            weatherimage.src="/image/rain.png";
            break;
        case 'Mist':
            weatherimage.src="/image/mist.png";
            break;
        case 'Snow':
            weatherimage.src="/image/snow.png";
    }
}
serachbtn.addEventListener('click',()=>{
    checkweather(input.value);
})