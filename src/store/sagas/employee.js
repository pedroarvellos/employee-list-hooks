import { put } from 'redux-saga/effects';
import axios from '../../axios'
import * as actions from '../actions/index'

export function* fetchEmployeesSaga() {
    yield put(actions.fetchEmployeesStart());
    try {
        const response = yield axios.get('/employees.json');

        const fetchedEmployees = [];
        for (let key in response.data) {
            fetchedEmployees.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchEmployeesSuccess(fetchedEmployees));
    } catch (err) {
        yield put(actions.fetchEmployeesFail(err));
    }
}

export function* addEmployeesSaga(action) {
    yield put(actions.addEmployeeStart());
    try {
        const response = yield axios.post('/employees.json', action.employee);

        yield put(actions.addEmployeeSuccess({ ...action.employee, ...{ id: response.data.name } }));
    } catch (err) {
        yield put(actions.addEmployeeFail(err));
    }
}

export function* removeEmployeesSaga(action) {
    yield put(actions.removeEmployeeStart());
    try {
        yield axios.delete('/employees.json', action.employeeId);

        yield put(actions.removeEmployeeSuccess(action.employeeId));
    } catch (err) {
        console.log(err)
        yield put(actions.removeEmployeeFail(err));
    }
}