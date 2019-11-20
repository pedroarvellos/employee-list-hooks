import * as actionTypes from '../actionTypes'

export const fetchEmployeesStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_START
    }
}

export const fetchEmployeesSuccess = employees => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_SUCCESS,
        employees: employees
    }
}

export const fetchEmployeesFail = err => {
    return {
        type: actionTypes.FETCH_EMPLOYEES_FAIL,
        err: err
    }
}

export const fetchEmployees = () => {
    return {
        type: actionTypes.FETCH_EMPLOYEES
    }
}

export const addEmployeeStart = () => {
    return {
        type: actionTypes.ADD_EMPLOYEE_START
    }
}

export const addEmployeeSuccess = employee => {
    return {
        type: actionTypes.ADD_EMPLOYEE_SUCCESS,
        employee: employee
    }
}

export const addEmployeeFail = err => {
    return {
        type: actionTypes.ADD_EMPLOYEE_FAIL,
        err: err
    }
}

export const addEmployee = employee => {
    return {
        type: actionTypes.ADD_EMPLOYEE,
        employee: employee
    }
}

export const removeEmployee = employeeId => {
    return {
        type: actionTypes.REMOVE_EMPLOYEE,
        employeeId: employeeId
    }
}