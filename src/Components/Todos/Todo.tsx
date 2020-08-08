import React from 'react'
import FlipMove from 'react-flip-move'

const styles = {
    ul: {
        backgroundColor: '#3f3160',
        listStyle: 'none',
        minHeight: '400px',
        width: '400px',
        padding: '30px',
        margin: '20px',
        borderRadius: '5px',
    },
    li: {
        backgroundColor: 'rgb(27, 112, 137)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    checkiInput: {
        marginRight: '10px',
        cursor: 'pointer'
    },
    textInput: {
        backgroundColor: 'rgb(27, 112, 137)',
        border: 0,
        color: '#fff',
        fontSize: '18px',
        outline: 'none'
    },
    button: {
        backgroundColor: 'rgb(235, 156, 5)',
        border: 'none',
        color: 'white',
        outline: 'none',
        cursor: 'pointer'
    }
}

type TodoType = {
    id: number,
    completed: boolean,
    title: string
}

type PropsType = {
    todos: Array<TodoType>,
    onToggle: (id: number) => void,
    deleteTodo: (id: number) => void,
    updateTodo: (value: string, id: number) => void
}

const Todo = (props: PropsType) => {

    return (
        <div style={styles.ul}>
            <FlipMove duration={500} easing="ease-in-out">
                {
                    props.todos.map((todo, index) => { 

                        const classes: Array<any> = []

                        if (todo.completed) {
                            classes.push('completed')
                        }
                        return (
                            <div key={todo.id} style={styles.li}>

                                <span className={classes.join('  ')}>
                                    <input checked={todo.completed} style={styles.checkiInput} type="checkbox" onChange={() => props.onToggle(todo.id)} />
                                    <strong>{index + 1}</strong>
                                &nbsp;
                                <input
                                        type="text"
                                        onChange={(e) => props.updateTodo(e.target.value, todo.id)}
                                        key={todo.id}
                                        value={todo.title}
                                        style={styles.textInput}
                                    />
                                </span>
                                <button onClick={() => props.deleteTodo(todo.id)} style={styles.button}>&times;</button>
                            </div>
                        )
                    }
                    )
                }
            </FlipMove>
        </div>
    )
}

export default Todo