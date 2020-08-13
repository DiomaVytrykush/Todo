import React, { useState } from 'react'
import FlipMove from 'react-flip-move'
import './Todo.css'

type TodoType = {
    id: number,
    completed: boolean,
    title: string
}

type PropsType = {
    todos: Array<TodoType>,
    onToggle: (id: number) => void,
    deleteTodo: (id: number) => void,
    updateTodo: (target: any, id: number) => void,
    deleteAllTodos: () => void
}

const Todo = (props: PropsType) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="todoWrapper">
            <FlipMove duration={500} easing="ease-in-out">
                {
                    props.todos.map((todo, index) => {

                        const classes: Array<any> = []

                        if (todo.completed) {
                            classes.push('completed')
                        }
                        return (
                            <div key={todo.id} className="todoItems" >

                                <span style={{ display: 'flex', alignItems: 'center', width: '95%' }} className={classes.join('  ')}>
                                    <label className="container">
                                        <input
                                            checked={todo.completed}
                                            style={{ outline: "none", cursor: "pointer", border: "50%" }}
                                            type="checkbox"
                                            onChange={() => props.onToggle(todo.id)} />
                                        <span className="checkmark"></span>
                                    </label>
                                    <strong>{index + 1}</strong>
                                &nbsp;
                                <input
                                        className="textInput"
                                        type="text"
                                        onChange={(e) => props.updateTodo(e.target.value, todo.id)}
                                        key={todo.id}
                                        value={todo.title}
                                    />
                                </span>
                                {
                                    isOpen && <div className="modal">
                                        <div className="modal__body">
                                            <h1>Are you sure you want to delete todo`{index + 1}`?</h1>
                                            <button className="modal__button"
                                                style={{ margin: '15px 0' }}
                                                onClick={() => {
                                                    props.deleteTodo(todo.id);
                                                    setOpen(false)
                                                }}>Yes</button>
                                            <button className="modal__button"
                                                onClick={() => setOpen(false)}
                                                style={{ margin: '15px 10px' }}>No</button>
                                        </div>
                                    </div>
                                }
                                <button className="deleteTodo" onClick={() => { setOpen(true) }}>&times;</button>
                            </div>
                        )
                    })
                }
                <button className="addTodoButton" style={{ margin: '20px 0' }} onClick={() => props.deleteAllTodos()}>Delete all</button>
            </FlipMove>
        </div>
    )
}

export default Todo