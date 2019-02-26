import React from 'react';

const Form = props => {
    return (
        <form>
            <input type = 'text' value = {props.value} onChange = {props.change} placeholder = 'Wpisz miasto'></input>
            {/* <button>Wyszukaj miasto</button> */}
        </form>
    )
};
export default Form;