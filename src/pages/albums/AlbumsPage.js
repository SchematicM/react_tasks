import React, {useEffect, useState} from 'react';
import {typicodeService} from "../../services/typicode.service";
import AlbumComponent from "../../components/album/AlbumComponent";

const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(()=> {
        typicodeService.getAlbums().then(value => value.data).then(value => setAlbums(value))
    },[]);
    return (
        <div>
           <h2>Albums page</h2>
            {
                albums.map(item => <AlbumComponent key = {item.id} item = {item}/>)
            }
        </div>
    );
};

export default AlbumsPage;