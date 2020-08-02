import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from '../context';


function TodoItem({todo, index, onChange}) {

    const classes = [];
    const {removeTodo} = useContext(Context)

    if(todo.completed) {
       classes.push('done')
    }

    return (
        <li className='todo__list-item'>
            <span className={classes.join(' ')}>
                <input
                    className='todo__input'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}
                />
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className='todo__button' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.prototype = {
    todo:PropTypes.object.isRequired,
    index:PropTypes.number,
    onChange:PropTypes.func.isRequired
}

export default TodoItem