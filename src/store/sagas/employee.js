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