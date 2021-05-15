import { createStore, compose, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import data from './dataReducer/dataReducer';
import user from './loginReducer/loginReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const mainReducer = combineReducers({
    data,
    user
})

const store = createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;
