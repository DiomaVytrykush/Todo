import React, { useState } from 'react'
import './AddTodo.css'

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
        <form className="addTodo" onSubmit={handleSubmit}>
            <input className="addTodoText" value={value} onChange={(event) => setValue(event.target.value)} />
            <button className="addTodoButton" type="submit">Add</button>
        </form>
    )
}

export default AddTodo