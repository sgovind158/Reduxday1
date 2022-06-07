import { counterDecrement, counterIncrement , Add} from "./action.types";

export const add = ()=>({type:counterIncrement})
export const sub = ()=>({type:counterDecrement}) 
export const userAdd = ()=>({type:Add})