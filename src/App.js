import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';

const App = () => {
  const [employeesList, setEmployeesList] = useState([
    {
      id: '1',
      name: 'Mark McDowel',
      role: 'Software Engineer'
    },
    {
      id: '2',
      name: 'Chris Denver',
      role: 'Software Architect'
    }
  ])

  const addEmployee = employee => {
    setEmployeesList(employeesList.concat(employee))
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
