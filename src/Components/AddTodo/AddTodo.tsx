import React, { useState } from 'react'

type PropsType = {
    onAddTodo: (value: string) => void
}

const AddTodo = ({ onAddTodo }: PropsType) => {

    const [value, setValue] = useState('')

    const handleSubmit = (event: any) => {
        event.preventDefault()

        if (value.trim()) {
            onAddTodo(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo