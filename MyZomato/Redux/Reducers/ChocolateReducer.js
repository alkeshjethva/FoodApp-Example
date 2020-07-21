import { initialState } from "./initialState";
import { ActionType } from "../Actions/ActionTypes";

export const ChocolateReducer = (state = initialState.Chocolate, action) => {
    switch (action.type) {
        case ActionType.ADD_CHOCOLATE: {

            const name = initialState.Chocolate.name
            const price = initialState.Chocolate.price

            return {
                ...state,
                name: state.name = name,
                item: state.item + 1,
                price: state.price + 100
            }
        }
        case ActionType.REMOVE_CHOCOLATE: {

            const name = initialState.Chocolate.name
            const price = initialState.Chocolate.price

            return {
                ...state,
                name: state.name = name,
                item: state.item - 1,
                price: state.price - 100
            }
        }
        default: return {
            ...state
        }
    }
}