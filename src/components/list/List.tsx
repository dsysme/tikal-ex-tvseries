import React from 'react'
import { Tile } from '../tile/Tile'

type Props = {
    shows: any
}

export const List: React.FC<Props> = ({ shows }) => {
    return (
        <div>
            {shows.map((item: any) => (
                <div key={item.show.id}>
                    <Tile
                        name={item.show.name}
                        pic={item.show.image ? item.show.image.medium : ''}
                    />
                </div>
            ))}
        </div>
    );
 
}
