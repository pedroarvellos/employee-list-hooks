import React from 'react'
import { Paper, List, ListItem, ListItemText } from '@material-ui/core'

const EmployeeList = props => {
    return (
        <Paper>
            <List>
                <ListItem>
                    <ListItemText>Pedro Arvellos</ListItemText>
                    <ListItemText>Software Analyst</ListItemText>
                </ListItem>
            </List>
        </Paper>
    )
}

export default EmployeeList