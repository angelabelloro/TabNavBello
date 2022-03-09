import { ADD_EVENT, REMOVE_EVENT, SELECT_EVENT } from "../actions/events.actions";

const initialState = {
    eventList: [],
    selectedID: null,
};

const EventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_EVENT:
            return {
            ...state,
            eventList: [...state.eventList, action.payload],
        };
        case REMOVE_EVENT:
            return {
                ...state,
            eventList: state.eventList.filter(item => item.id !== action.eventID),
        };
        case SELECT_EVENT:
            return {
                ...state,
                selectedID: action.eventID,
            };
        default:
            return state;
    }
}

export default EventsReducer;