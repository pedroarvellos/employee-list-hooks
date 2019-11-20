import React, { useState } from 'react';
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList';
import EmployeeForm from './Employee/EmployeeForm';

const App = () => {
  const [employeesList, setEmployeesList] = useState([
    {
      name: "Mark McDowel",
      role: "Software Engineer"
    },
    {
      name: "Chris Denver",
      role: "Software Architect"
    }
  ])

  const addEmployee = employee => {
    setEmployeesList(employeesList.concat(employee))
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
          <EmployeeList employees={employeesList}></EmployeeList>
          <EmployeeForm addEmployee={addEmployee}></EmployeeForm>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;
