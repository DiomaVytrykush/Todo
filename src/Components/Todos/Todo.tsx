import React from 'react'
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
                                    <input checked={todo.completed} type="checkbox" onChange={() => props.onToggle(todo.id)} />
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
                                <button className="deleteTodo" onClick={() => props.deleteTodo(todo.id)} >&times;</button>
                            </div>
                        )
                    }
                    )
                }
                <button className="addTodoButton" style={{ margin: '20px 0' }} onClick={() => props.deleteAllTodos()}>Delete all</button>
            </FlipMove>
        </div>
    )
}

export default Todo