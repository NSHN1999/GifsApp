import PropsTypes from "prop-types";

export const GifCard = ({ title, url }) => {

    const tituloInitCap = title.substring(0, 15).toLowerCase();

    return(
        <div className="card">
            <div className="card__container-img">
                <img className="card__img" src={url}/>
            </div>
            <article className="card__descripcion">
                <h2 className="descripcion__title">{tituloInitCap}</h2>
            </article>
        </div>
    );
};

