

// reducer 
import { counterDecrement,counterIncrement } from "./action.types";

export const reducer = (state ,action)=>{
    console.log(state,action)

    switch(action.type){
        case counterIncrement:{
            state.count++;
            return {...state}
        }

        case counterDecrement:{
            state.count--;
            return {...state}
        }

        case "ADITION":{
            state.count += Number(action.payload);
            return {...state}
        }

        case "SUBTRATION":{
            state.count -= Number(action.payload);
            return {...state}
        }

        case "MULTIPICATION":{
            state.count *= Number(action.payload);
            return {...state}
        }

        case "DIVISION":{
            state.count /= Number(action.payload);
            return {...state}
        }

        case "CLEAR":{
            state.count = 0;
            return {...state}
        }
        
        default:{
         return   state
        }
    }
   
}
