import React, {useState} from "react";
import PropTypes from 'prop-types';


function useInputValue(defailtValue="") {
    const [value, setValue] = useState(defailtValue)

    return {
        bind: {
            value,
            onChange:event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo( {onCreate}) {
    const input = useInputValue('')
    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value)
            input.clear()
        }
    }



    return (
        <form className='todo__form' onSubmit={submitHandler}>
            <input className='todo__form-input' {...input.bind} />
            <button className='todo__form-btn' type='submit'>Add todo</button>
        </form>

    )
}

AddTodo.propTypes= {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo