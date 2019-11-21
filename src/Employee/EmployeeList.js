import React from 'react'
import { useSelector } from 'react-redux'
import { Paper, List, ListItem, ListItemText, ListItemIcon, Button } from '@material-ui/core'
import Spinner from '../Components/Spinner/Spinner'

const EmployeeList = ({ employees, removeEmployee }) => {
    const isLoading = useSelector(state => state.employeeReducer.loading)
    const spinner = isLoading && <div style={{ textAlign: 'center' }}><Spinner /></div>
    return (
        <Paper style={{ margin: '1em 0', padding: '0 2em' }}>
            <List style={{ paddingTop: '1em' }}>
                {spinner}
                {employees.map(employee => (
                    <ListItem key={employee.id}>
                        <ListItemText key={employee.name}>{employee.name}</ListItemText>
                        <ListItemText key={employee.role}>{employee.role}</ListItemText>
                        <ListItemIcon>
                            <Button onClick={() => removeEmployee(employee.id)} size='small' variant='contained' style={{ backgroundColor: '#FB5A62', color: 'white' }}> delete </Button>
                        </ListItemIcon>
                    </ListItem>
                ))}
            </List>
        </Paper>
    )
}

export default EmployeeList