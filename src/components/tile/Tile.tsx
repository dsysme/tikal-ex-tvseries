import React from 'react';

type Props = {
    name: string
    pic: string
}

export const Tile: React.FC<Props> = ({name, pic}) => {
    return (
        <div>
            <div>
                <img src={pic} alt={name}/>
            </div>
            <div>{name}</div>
        </div>
    );
};