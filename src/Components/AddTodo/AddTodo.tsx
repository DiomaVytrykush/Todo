import React, { useState } from 'react'

type PropsType = {
    onAddTodo: (value: string) => void
}

const styles = {
    button : {
    margin: '0 10px',
    backgroundColor: 'rgb(235, 156, 5)',
    borderRadius: '5px',
    border: 'none',
    height: '34px',
    outline: 'none',
    width: '76px',
    cursor: 'pointer',
    padding: '10px',
    }
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
            <input style={{borderRadius: '5px', border: 'none', height: '30px', outline: 'none', width: '300px'}} value={value} onChange={(event) => setValue(event.target.value)} />
            <button style ={styles.button} type="submit">Add todo</button>
        </form>
    )
}

export default AddTodo