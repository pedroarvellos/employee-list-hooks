import uuid from 'uuid/v4'

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
        case 'ADD_EMPLOYEE': return addEmployee(state, action)
        case 'REMOVE_EMPLOYEE': return removeEmployee(state, action)
    }
}