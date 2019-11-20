import uuid from 'uuid/v4'
import * as actionTypes from '../actionTypes'

const initialState = {
    employees: [
        {
            id: uuid(),
            name: 'Mark McDowel',
            role: 'Software Engineer'
        },
        {
            id: uuid(),
            name: 'Chris Denver',
            role: 'Software Architect'
        }
    ]
}

const addEmployee = (state, action) => {
    const newEmployee = { ...action.employee, ...{ id: uuid() } }
    return {
        ...state,
        ...{ employees: state.employees.concat(newEmployee) }
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
        case actionTypes.ADD_EMPLOYEE: return addEmployee(state, action)
        case actionTypes.REMOVE_EMPLOYEE: return removeEmployee(state, action)
        default: return state
    }
}

export default reducer;