export const ADD_EVENT = 'ADD_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT'
export const SELECT_EVENT = 'SELECT_EVENT';

export const addEvent= (item) => ({
    type: ADD_EVENT,
    payload: item,
});

export const removeItem = (id) => ({
    type: REMOVE_EVENT,
    eventID: id,
});
export const selectEvent = (eventID) => ({
    type: SELECT_EVENT,
    eventID,
});