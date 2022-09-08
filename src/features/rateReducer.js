import { createSlice } from "@reduxjs/toolkit";


const rateReducer = createSlice({
    name: 'rateReducer',
    initialState: {
        from: 0,
        to: 0,
        value: 0,
        result: 0,
        
    },

    reducers: {
        calculate: (state) => {
         let fromMultiplied = state.from[1] * state.value
         let result = (fromMultiplied / state.to[1]).toFixed(2)

         state.result  = `With ${state.value} ${state.from[0]} you can get ≈ ${result} ${state.to[0]}`;
         
         
        },

        setFrom: (state, action) =>  { 
          state.from = action.payload.fromCurrency;
    
        },

        setTo: (state, action) => {    
           
            state.to = action.payload.toCurrency;
        },

        setValue: (state, action) => {
           return{
            ...state,
            value: action.payload.value
           }
          
        }


    }


})


export const {calculate, setFrom, setTo, setValue} = rateReducer.actions;

export default rateReducer.reducer;