import { useState } from 'react';

const Form = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Add Todo: </label>
            <input
                type="text"
                className="input-field"
                id="new-todo"
                placeholder="Add to do..."
                value={value}
                onChange={(e) => handleChange(e)}
            />
            <button type="submit" onClick={handleChange}>Add</button>
        </form>
    )
}

export default Form