import {ADD_PLACE} from '../actions/places.action';
import Place from '../models/Place'

const initialState ={
    places: []
}

export default (state = initialState, action) =>{
    switch(action.type) {
        case ADD_PLACE:
            const itemPlace =new Place(Date.now(), action.payload.title)
            return {
                ...state,
                places: state.places.concat(itemPlace)
            }
            default:
                return state
    }
}