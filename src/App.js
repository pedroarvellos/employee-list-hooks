import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList';

const App = () => {
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
          <EmployeeList></EmployeeList>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;
