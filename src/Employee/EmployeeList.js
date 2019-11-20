import React from 'react'
import { Paper, List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core'

const EmployeeList = ({ employees }) => {
    return (
        <Paper style={{ margin: '1em 0', padding: '0 2em' }}>
            <List>
                {employees.map(employee => (
                    <ListItem key={employee.id}>
                        <ListItemText key={employee.name}>{employee.name}</ListItemText>
                        <ListItemText key={employee.role}>{employee.role}</ListItemText>
                        <ListItemIcon>
                            <Button onClick={e => console.log(employee.name)} size='small' variant='contained' color='secondary'> delete </Button>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default EmployeeList