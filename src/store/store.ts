import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {taskReducer} from "./taskReducer";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    app: appReducer,
    task: taskReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;