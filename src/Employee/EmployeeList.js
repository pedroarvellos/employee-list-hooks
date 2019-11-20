import React from 'react'
import { Paper, List, ListItem, ListItemText } from '@material-ui/core'

const EmployeeList = ({ employees }) => {
    return (
        <Paper>
            <List>
                {
                    employees.map(employee => (
                        <ListItem key={employee.name}>
                            <ListItemText key={employee.name}>{employee.name}</ListItemText>
                            <ListItemText key={employee.role}>{employee.role}</ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </Paper>
    )
}

export default EmployeeList