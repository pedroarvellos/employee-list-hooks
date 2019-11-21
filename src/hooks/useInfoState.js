import { useState } from 'react'

export default () => {
    const [info, setInfo] = useState({})

    return {
        info,
        handleChange: (e, fieldName) => {
            setInfo({ ...info, ...{ [fieldName]: e.target.value } })
        },
        resetInfo: () => {
            setInfo({})
        }
    }
}