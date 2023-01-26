import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import ListItem from '../components/ListItem'
import Add from '../assets/Add.png'

const NotesListPage = () => {
    
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('http://localhost:8000/notes/')
        let data = await response.json()
        setNotes(data)
    }

    return (
        <div>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>

            <div className='notes-list'>
                {notes.map((note, index) => (
                        <ListItem key={index} note={note} />
                        )
                    )
                }
            </div>
            <Link to="/note/new" className='floating-button'>
                <img src={Add} alt="add"/>
            </Link>
        </div>
    )
}

export default NotesListPage
