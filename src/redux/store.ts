import { combineReducers, createStore } from 'redux';
import themeReducer from './reducer/Theme/theme-reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;