import { combineReducers } from "redux";
import iceCreamReducer from "./cakes/icecream/iceCreamReducer";
import cakeReducer from './cakes/cakereducer'
import userReducer from './user/UserReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})

export default rootReducer