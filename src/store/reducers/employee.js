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
    return {
        ...state,
        ...{ employees: state.employees.concat(action.employee), loading: false }
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

const removeEmployeeSuccess = (state, action) => {
    return {
        ...state,
        ...{ employees: state.employees.filter(employee => employee.id !== action.employeeId), loading: false }
    }
}

const removeEmployeeFail = (state, action) => {
    return {
        ...state,
        ...{ err: action.err, loading: false }
    }
}

const removeEmployeeStart = state => {
    return {
        ...state,
        ...{ loading: true }
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
        case actionTypes.REMOVE_EMPLOYEE_START: return removeEmployeeStart(state)
        case actionTypes.REMOVE_EMPLOYEE_FAIL: return removeEmployeeFail(state, action)
        case actionTypes.REMOVE_EMPLOYEE_SUCCESS: return removeEmployeeSuccess(state, action)
        default: return state
    }
}

export default reducer;