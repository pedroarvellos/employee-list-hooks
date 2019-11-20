import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core'
import uuid from 'uuid/v4'
import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';

const App = () => {
  const [employeesList, setEmployeesList] = useState([
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
  ])

  const addEmployee = employee => {
    setEmployeesList(employeesList.concat({...employee, ...{id: uuid()}}))
  }

  const deleteEmployee = employeeId => {
    setEmployeesList(employeesList.filter(employee => employee.id !== employeeId))
  }

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
          <EmployeeList employees={employeesList} deleteEmployee={deleteEmployee}></EmployeeList>
          <EmployeeForm addEmployee={addEmployee}></EmployeeForm>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;
