import { ActionType } from './ActionTypes'

export const addIcecreams = () => {
    return {
        type: ActionType.ADD_ICECREAMS
    }
}

export const removeIcecreams = () => {
    return {
        type: ActionType.REMOVE_ICECREAMS
    }
}
