import { combineReducers } from "redux"
import cartReduser from "./reducer/cartReducer"


const  rootReducer = combineReducers({
    cart: cartReduser
})


export default rootReducer