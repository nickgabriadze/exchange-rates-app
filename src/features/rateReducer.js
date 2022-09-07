import { createSlice } from "@reduxjs/toolkit";



const rateReducer = createSlice({
    name: 'rateReducer',
    initialState: {
        from: [],
        to: [],
        value: 0,
        result: 0
    },

    reducers: {
        calculate: (state, payload) => {
            
        
        },

        setFrom: (state, action) =>  { 
           
            return {
            ...state,
            from: action.payload.fromCurrency
           }
        },

        setTo: (state, action) => {    
            return {
                ...state,
                to: action.payload.toCurrnecy
               }
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