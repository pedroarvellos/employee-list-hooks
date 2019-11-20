import React from 'react'
import { Paper, List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core'

const EmployeeList = ({ employees, deleteEmployee }) => {
    return (
        <Paper style={{ margin: '1em 0', padding: '0 2em' }}>
            <List>
                {employees.map(employee => (
                    <ListItem key={employee.id}>
                        <ListItemText key={employee.name}>{employee.name}</ListItemText>
                        <ListItemText key={employee.role}>{employee.role}</ListItemText>
                        <ListItemIcon>
                            <Button onClick={() => deleteEmployee(employee.id)} size='small' variant='contained' style={{ backgroundColor: '#FB5A62', color: 'white'}}> delete </Button>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default EmployeeList