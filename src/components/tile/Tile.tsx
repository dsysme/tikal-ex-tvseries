import React from 'react';

type TileProps = {
    name: string
    pic: string
}

export const Tile: React.FC<TileProps> = ({name, pic}) => {
    return (
        <div>
            <div>
                <img src={pic} alt={name}/>
            </div>
            <div>{name}</div>
        </div>
    );
};