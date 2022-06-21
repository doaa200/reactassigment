import {createStore} from 'redux';
import languageReducer from './Reducer/language';
import { composeWithDevTools } from 'redux-devtools-extension';
import combine from './Reducer/combine'


const store = createStore(combine,composeWithDevTools());


export default store;
