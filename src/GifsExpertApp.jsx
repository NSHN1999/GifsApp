import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifsExpertApp = () => {

    const [ categorias, setCategorias ] = useState([]);

    const onAddCategoria  = (newCategoria) => {
        if(categorias.includes(newCategoria)) return;
        setCategorias([newCategoria, ...categorias])
    };

    return (
        <div className="container__aplicacion">

            <header className="aplicacion__header">
                <div className="header__letras">
                    <h1>
                        <span className="titulo__letra">G</span>
                        <span className="titulo__letra">I</span>
                        <span className="titulo__letra">F</span>
                        <span className="titulo__letra">S</span>
                    </h1>
                </div>
            </header> 

            <div className="aplicacion__content">
                <AddCategory
                    onNewCategoria={onAddCategoria}
                />
                {
                    categorias.map(categoria =>
                        <GifGrid 
                            key={categoria}
                            categoria={categoria}
                        />
                    )
                }
            </div>
        </div>
    );
};
