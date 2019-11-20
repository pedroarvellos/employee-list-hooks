import * as actionTypes from '../actionTypes'

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