import React from 'react'
import notes from '../assets/data'
import { Link, useParams } from 'react-router-dom'
import ArrowLeft from '../assets/ArrowLeft.png'

const NotePage = () => {
    let {noteId} = useParams()
    let note = notes.find(note => note.id === Number(noteId))
    // let noteId = match.params.id
    console.log("noteId:", noteId)
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/">
                        <img src={ArrowLeft} alt="arrow-left"/>
                    </Link>
                </h3>
            </div>
            <p>
                {note?.body}
            </p>
        </div>
    )
}

export default NotePage
