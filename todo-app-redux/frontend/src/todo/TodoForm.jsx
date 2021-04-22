import React from 'react';
import Grid from '../template/Grid';
import IconButton from '../template/IconButton';

const TodoForm = props => {

    /* ao selecionar alguma tecla, executa uma função
        Enter -> Adiciona
        Shift+Enter -> Pesquisa
        Escape -> Limpa Formulario
    */
    const keyHandler = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role="form" className="todoForm">

            <Grid cols="12 9 10">
                <input type="text" id="description" className="form-control" 
                    placeholder="Adicione uma tarefa" onChange={props.handleChange}
                    value={props.description} onKeyUp={keyHandler} />
            </Grid>

            <Grid cols="12 3 2">
                <IconButton style="primary" icon="plus"
                    onClick={props.handleAdd} />
                <IconButton style="info" icon="search"
                    onClick={props.handleSearch} />
                <IconButton style="default" icon="close"
                    onClick={props.handleClear} />
                    
            </Grid>
        </div>
    );
}

export default TodoForm;
