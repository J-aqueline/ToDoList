import React, { useState } from 'react';

const TodoForm = (props) => {
    const { addTodo } = props; // Recebendo addTodo do objeto props

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;

        //adicionar todo
        addTodo(value, category);
        //limpar campos
        setValue("");
        setCategory("");
    };

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa: </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Digite o título' value={value} onChange={(e) => setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>Selecione uma categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Estudos'>Estudos</option>
                </select>
                <button className='tarefa' type='submit'>Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm;
