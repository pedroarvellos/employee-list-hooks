export const addEmployee = employee => {
    return {
        type: 'ADD_EMPLOYEE',
        employee: employee
    }
}

export const removeEmployee = employeeId => {
    return {
        type: 'REMOVE_EMPLOYEE',
        employeeId: employeeId
    }
}