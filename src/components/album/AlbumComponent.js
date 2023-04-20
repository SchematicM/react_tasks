import React from 'react';

const AlbumComponent = ({item}) => {
    return (
        <div className={'album'}>
            <div>User Id: {item.userId}</div>
            <div>Title: {item.title}</div>
        </div>
    );
};

export default AlbumComponent;