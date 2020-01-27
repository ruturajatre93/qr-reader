import { combineReducers } from 'redux'

function exchangeRates(state: any = {}, action: any) {
    switch (action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({exchangeRates})

export default rootReducer