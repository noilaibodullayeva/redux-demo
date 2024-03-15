import { combineReducers } from "redux";
import iceCreamReducer from "./cakes/icecream/iceCreamReducer";
import cakeReducer from './cakes/cakereducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer