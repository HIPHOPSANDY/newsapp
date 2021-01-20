import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from './reducers/newsReducer';
import thunk from 'redux-thunk';
const rootReducers = combineReducers({
    news: newsReducer
});

const middleware = composeWithDevTools(applyMiddleware(thunk));
export default createStore(rootReducers, middleware);