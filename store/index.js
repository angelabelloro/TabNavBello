import { createStore, combineReducers} from 'redux';
import EventsReducer from './reducers/events.reducer';

import ItemsReducer from './reducers/items.reducer';
const RootReducer = combineReducers({
    items: ItemsReducer,
    events: EventsReducer,
})

export default createStore (RootReducer);