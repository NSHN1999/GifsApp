import { useState } from "react";

export const AddCategory = ( {onNewCategoria} ) => {

    const [ inputValor, setInputValor ] = useState("");

    const onInputChange = ({target}) => {
        setInputValor(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValor.trim().length <= 1) return;
        onNewCategoria(inputValor.toUpperCase());
        setInputValor("");
    };

    return(
        <form 
            onSubmit={onSubmit}
        >
            <input 
                className="form__input"
                type="text"
                placeholder="Buscar gif..."
                value={inputValor}
                onChange={onInputChange}
            />
        </form>
    );
};
