import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduces';
import logger from 'redux-logger';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, logger)
)

export default store;