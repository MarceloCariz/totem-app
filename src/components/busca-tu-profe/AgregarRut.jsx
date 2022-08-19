import { useState } from 'react';


export const AgregarRut = ({ onNewRut }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) =>{
        setInputValue(target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        if (inputValue.trim().length <=8) return;
        onNewRut(inputValue.trim());
        setInputValue('');

    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Ingresar rut"
            value={inputValue}
            onChange={onInputChange}
        />

    </form>
  )
}
