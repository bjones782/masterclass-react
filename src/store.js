
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import standardsReducer from './reducers/standardsReducer';
import studentReducer from './reducers/studentReducer';




// const middleware = applyMiddleware()
const rootReducer = combineReducers({
  user: userReducer,
  standards: standardsReducer,
  students: studentReducer 
  
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);