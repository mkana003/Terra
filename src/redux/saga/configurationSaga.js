import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { receiveConfiguration } from '../actions/actions'; 
	
export function* asyscgetConfiguration(action) {
	yield put(receiveConfiguration(action.colorScheme));
}