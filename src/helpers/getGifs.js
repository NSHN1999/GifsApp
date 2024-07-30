
export const getGifs = async(categoria) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jr7Tjw6k6fIQyrIHpIQvbHOfKtvzdhF7&q=${categoria}&limit=12`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        width: img.images.downsized_medium.width,
        height: img.images.downsized_medium.height
    }));
    
    return gifs;
};
