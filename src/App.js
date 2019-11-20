import React from 'react';
import { Paper, Grid } from '@material-ui/core'
import EmployeeList from './Employee/EmployeeList';

const App = () => {
  return (
    <Paper>
      <Grid container justify='center'>
        <Grid item xs={11} md={8} lg={4}>
          <EmployeeList></EmployeeList>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default App;
