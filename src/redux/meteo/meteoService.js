import axios from 'axios'

//Get Meteo
const getMeteo=async (citylat,citylog)=>{
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${citylat}&lon=${citylog}&appid=c08dafec434fe7fd0d157ff107a23b06`)
    return response.data;
}

//Get City
const getCity=async(city)=>{
    const response= await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=c08dafec434fe7fd0d157ff107a23b06`)
    return response.data;
}

const meteoService={
    getMeteo,
    getCity
};

export default meteoService;
