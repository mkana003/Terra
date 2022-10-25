import { all } from 'redux-saga/effects'
	
import {watchSaga} from './watchSaga'

export default function* RootSaga() {
    yield all([watchSaga()]);
}