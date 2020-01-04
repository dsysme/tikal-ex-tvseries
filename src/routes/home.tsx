import React from 'react'
import {List} from '../components/list/List'
import {Header} from '../components/header/Header'

type Props = {
    q: string
    shows: any
    handleSearchChange: any
}

export const Home: React.FC<Props> = ({q, shows, handleSearchChange}) => {
    return (
        <div>
            <Header handleSearchChange={handleSearchChange} q = {q}/>
            <List shows={shows}/>
        </div>
    )
}