import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList'
import EmployeeForm from './Employee/EmployeeForm'
import * as actions from './store/actions/employee'

const App = () => {
  const employees = useSelector(state => state.employeeReducer.employees)
  const dispatch = useDispatch()

  const onAddEmployee = employee => dispatch(actions.addEmployee(employee))
  const onRemoveEmployee = employeeId => dispatch(actions.removeEmployee(employeeId))

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
    >
      <Grid container justify='center'>
        <Grid item xs={11} md={8} lg={4}>
          <EmployeeList employees={employees} removeEmployee={onRemoveEmployee}></EmployeeList>
          <EmployeeForm addEmployee={onAddEmployee}></EmployeeForm>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;
