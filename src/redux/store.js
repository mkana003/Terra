import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
	
import RootReducer from "./reducers/RootReducer";
import RootSaga from "./saga/RootSaga";
	
const sagaMidleware = createSagaMiddleware();
const store = createStore(RootReducer, applyMiddleware(sagaMidleware))
	
sagaMidleware.run(RootSaga);
	
export default store;