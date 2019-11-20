import React from 'react'
import { Paper, TextField, Button, Box } from '@material-ui/core'
import useInfoState from '../hooks/useInfoState'

const EmployeeForm = ({ addEmployee }) => {
    const {info, handleChange, resetInfo} = useInfoState()

    return (
        <Paper style={{ margin: '1em 0', padding: '0 2em' }}>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    resetInfo()
                    addEmployee(info)
                }}
                style={{ width: '100%', padding: '0.5em' }}
            >
                <TextField
                    label='name'
                    margin='normal'
                    value={info.name ? info.name : ''}
                    onChange={event => handleChange(event, 'name')}
                    fullWidth
                    autoFocus
                />
                <br />
                <TextField
                    label='role'
                    margin='normal'
                    value={info.role ? info.role : ''}
                    onChange={event => handleChange(event, 'role')}
                    fullWidth
                />
                <br />
                <Box display='flex' p={1} justifyContent='flex-end'>
                    <Button type='submit' size='small' variant='contained' style={{ backgroundColor: '#6693AE', color: 'white'}}> Add </Button>
                </Box>
            </form>
        </Paper>
    )
}

export default EmployeeForm