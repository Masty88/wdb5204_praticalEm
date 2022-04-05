import { configureStore } from '@reduxjs/toolkit';
import meteo from './meteo/meteoSlice'

export const store= configureStore({
    reducer:{
     meteo,
    }
})
