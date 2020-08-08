import React from 'react'

const styles = {
    ul: {
        listStyle: 'none',
        height: '30%',
        width: '50%'
    },
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
        width: '100%'
    },
    input: {
        marginRight: '10px'
    },
    button: {
        backgroundColor: 'white'
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
    deleteDoto: (id: number) => void,
}

const Todo = (props: PropsType) => {

    return (
        <ul style={styles.ul}>
            {
                props.todos.map((todo, index) => {

                    const classes: Array<any> = []

                    if (todo.completed) {
                        classes.push('completed')
                    }
                    return (
                        <li style={styles.li} key={todo.id}>
                            <span className={classes.join('  ')}>
                                <input checked={todo.completed} style={styles.input} type="checkbox" onChange={() => props.onToggle(todo.id)} />
                                <strong>{index + 1}</strong>
                        &nbsp;
                        {todo.title}
                            </span>
                            <button onClick={() => props.deleteDoto(todo.id)} style={styles.button}>&times;</button>
                        </li>
                    )
                }
                )
            }
        </ul>
    )
}

export default Todo