import { ActionType } from './ActionTypes'

export const addChocolate = () => {
    return {
        type: ActionType.ADD_CHOCOLATE
    }
}

export const removeChocolate = () => {
    return {
        type: ActionType.REMOVE_CHOCOLATE
    }
}

