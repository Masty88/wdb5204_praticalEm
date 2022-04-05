import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import meteoService from "./meteoService";

const initialState={
    city: null,
    meteo: null,
    isError: false,
    isSuccess:false,
    isLoading:false,
}

//Fetch Post
export const getMeteo= createAsyncThunk("meteo/get", async (city,thunkApi )=>{
    try{
        console.log(city[0].lat)
        return await meteoService.getMeteo(city[0].lat,city[0].lon);
    }catch (error){
        const message= error.response;
        return thunkApi.rejectWithValue(message)
    }
})

export const getCity= createAsyncThunk("city/get", async(city,thunkApi)=>{
    try{
        return await meteoService.getCity(city);
    }catch(error){
        const message= error.response;
        return thunkApi.rejectWithValue(message)
    }
})

export const meteoSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = '';
        },
        changeTown:(state,action)=>{
            state.city=action.payload
            console.log(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder
              .addCase(getMeteo.pending, (state)=>{
               state.isLoading= true
               })
            .addCase(getMeteo.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.isSuccess=true;
                state.meteo = action.payload;
            })
            .addCase(getMeteo.rejected,(state,action)=>{
                state.isLoading= false;
                state.isError=true;
                state.message=action.payload;
                state.meteo = null;
            })
            .addCase(getCity.pending, (state)=>{
                state.isLoading= true
            })
            .addCase(getCity.fulfilled,(state,action)=>{
                state.isLoading= false;
                state.isSuccess=true;
                state.city = action.payload;
                console.log(state.city)
            })
            .addCase(getCity.rejected,(state,action)=>{
                state.isLoading= false;
                state.isError=true;
                state.message=action.payload;
                state.city = "Geneva";
            })
    }
})

export const{ reset, changeTown} = meteoSlice.actions
export default meteoSlice.reducer
