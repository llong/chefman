import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
