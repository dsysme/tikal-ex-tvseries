import React from 'react'
import {List} from '../components/list/List'
import {Header} from '../components/header/Header'

type HomeProps = {
    q: string
    shows: any
    handleSearchChange: any
}

export const Home: React.FC<HomeProps> = ({q, shows, handleSearchChange}) => {
    return (
        <div>
            <Header handleSearchChange={handleSearchChange} q = {q}/>
            <List shows={shows}/>
        </div>
    )
}