import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";
import { GifCard } from "./GifCard.jsx";

export const GifGrid = ({categoria}) => {

    const [ images, setImages ] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(categoria);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="container__grid">
            <h3 className="grid__title">{categoria}</h3>
            <div className="grid__cards">
                {
                    images.map(img => 
                        <GifCard
                            key={img.id}
                            title={img.title}
                            url={img.url}
                        />    
                    )
                }
            </div>
        </div>
    );
};
