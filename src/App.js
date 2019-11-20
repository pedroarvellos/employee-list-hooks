import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList'
import EmployeeForm from './Employee/EmployeeForm'
import * as actions from './store/actions/employee'
import axios from './axios'

const App = () => {
  const employees = useSelector(state => state.employeeReducer.employees)
  const dispatch = useDispatch()

  const onFetchEmployees = () => dispatch(actions.fetchEmployees())
  const onAddEmployee = employee => dispatch(actions.addEmployee(employee))
  const onRemoveEmployee = employeeId => dispatch(actions.removeEmployee(employeeId))

  useEffect(() => {
    onFetchEmployees()
  }, [])

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
