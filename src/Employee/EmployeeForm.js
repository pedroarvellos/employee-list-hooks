import React, { useState } from 'react'
import { Paper, TextField, Button, Box } from '@material-ui/core'

const EmployeeForm = props => {
    const [info, setInfo] = useState({})

    const handleChange = (e, fieldName) => {
        setInfo({ ...info, ...{ [fieldName]: e.target.value } })
    }
    return (
        <Paper style={{ margin: '1em 0', padding: '0 2em' }}>
            <form onSubmit={e => console.log(e)} style={{ width: '100%', padding: '0.5em' }}>
                <TextField
                    label='name'
                    margin='normal'
                    value={info.name ? info.name : ''}
                    onChange={event => handleChange(event, 'name')}
                    fullWidth
                    autoFocus
                />
            </form>
        </Paper>
    )
}

export default EmployeeForm