import { initialState } from "./initialState";
import { ActionType } from "../Actions/ActionTypes";

export const IceCreamsreducer = (state = initialState.Icecreams, action) => {
    switch (action.type) {
        case ActionType.ADD_ICECREAMS: {

            const name = initialState.Icecreams.name
            const price = initialState.Icecreams.price

            return {
                ...state,
                name: state.name = name,
                item: state.item + 1,
                price: state.price + 150
            }
        }
        case ActionType.REMOVE_ICECREAMS: {

            const name = initialState.Icecreams.name
            const price = initialState.Icecreams.price

            return {
                ...state,
                name: state.name = name,
                item: state.item - 1,
                price: state.price - 150
            }
        }
        default: return {
            ...state
        }
    }
}