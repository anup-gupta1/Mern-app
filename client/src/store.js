import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { compose } from 'redux';

const initialState = [];
const middlewar = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewar),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;