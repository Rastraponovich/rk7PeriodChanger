import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux"
import { periodReducer } from "./periodReducer"
import { statusReducer } from "./statusReducer"

const rootReducer = combineReducers({
    // main: null,
    statusStore: statusReducer,
    periodStore: periodReducer,
})

export const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        // console.log(action.type, "hydrate")
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        // console.log(action.type, "non hydrate")
        // console.log(state, action, " non hydra")

        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>
