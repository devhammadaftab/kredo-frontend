import { InitialStateType, ActionType } from "interfaces"
import { ActionConstent } from "constants/store"

const reducer = (state: InitialStateType, actions: ActionType): InitialStateType => {
    switch (actions.type) {
        case ActionConstent.SET_CATEGORIES:
            return {
                ...state,
                categories: actions.payload
            }
        case ActionConstent.SET_PRODUCTS:
            return {
                ...state,
                products: actions.payload
            }
        case ActionConstent.SET_PRODUCT:
            return {
                ...state,
                product: actions.payload
            }
        default:
            return state
    }
}

export default reducer