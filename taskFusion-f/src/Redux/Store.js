import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/Reducer";
import { thunk } from "redux-thunk";
import { projectReducer } from "./Project/Reducer";
import ChatReducer from "./Chat/Reducer";
import issuesReducer from "./Issue/Reducer";
import commentReducer from "./Comment/Reducer";
import subscriptionReducer from "./Subscription/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
project:projectReducer,
chat:ChatReducer ,
issue:issuesReducer,
comment: commentReducer,
subscription: subscriptionReducer
});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))