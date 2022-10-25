import {takeEvery, put, call, takeLatest} from 'redux-saga/effects'
import { types } from '../actions/types'
import { asyscgetConfiguration } from './configurationSaga'

export function* watchSaga() {
    yield takeLatest(types.Request_configuration, asyscgetConfiguration)
}