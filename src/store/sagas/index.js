import { takeEvery, all } from 'redux-saga/effects'
import * as actionTypes from '../actionTypes'
import { fetchEmployeesSaga, addEmployeesSaga, removeEmployeesSaga } from './employee'

export function* watchEmployee() {
    yield all([
        takeEvery(actionTypes.FETCH_EMPLOYEES, fetchEmployeesSaga),
        takeEvery(actionTypes.ADD_EMPLOYEE, addEmployeesSaga),
        takeEvery(actionTypes.REMOVE_EMPLOYEE, removeEmployeesSaga)
    ])
}