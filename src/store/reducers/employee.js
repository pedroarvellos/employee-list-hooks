import uuid from 'uuid/v4'
import * as actionTypes from '../actionTypes'

const initialState = {
    employees: [],
    loading: false,
    err: {}
}

const fetchEmployeesSuccess = (state, action) => {
    return {
        ...state,
        ...{ employees: action.employees, loading: false }
    }
}

const fetchEmployeesFail = (state, action) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
}

const fetchEmployeesStart = state => {
    return {
        ...state,
        ...{ loading: true }
    }
}

const addEmployeeSuccess = (state, action) => {
    const newEmployee = { ...action.employee, ...{ id: uuid() } }
    return {
        ...state,
        ...{ employees: state.employees.concat(newEmployee) }
    }
}

const addEmployeeFail = (state, action) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
}

const addEmployeeStart = state => {
    return {
        ...state,
        ...{ loading: true }
    }
}

const removeEmployee = (state, action) => {
    return {
        ...state,
        ...{ employees: state.employees.filter(employee => employee.id !== action.employeeId) }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_EMPLOYEES_START: return fetchEmployeesStart(state)
        case actionTypes.FETCH_EMPLOYEES_FAIL: return fetchEmployeesFail(state, action)
        case actionTypes.FETCH_EMPLOYEES_SUCCESS: return fetchEmployeesSuccess(state, action)
        case actionTypes.ADD_EMPLOYEE_START: return addEmployeeStart(state)
        case actionTypes.ADD_EMPLOYEE_FAIL: return addEmployeeFail(state, action)
        case actionTypes.ADD_EMPLOYEE_SUCCESS: return addEmployeeSuccess(state, action)
        case actionTypes.REMOVE_EMPLOYEE: return removeEmployee(state, action)
        default: return state
    }
}

export default reducer;