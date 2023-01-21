import React from 'react'
import notes from '../assets/data'
import { Link, useParams } from 'react-router-dom'

const NotePage = () => {
    let {noteId} = useParams()
    let note = notes.find(note => note.id === Number(noteId))
    // let noteId = match.params.id
    console.log("noteId:", noteId)
    return (
        <div>
            <p>
                {note?.body}
            </p>
        </div>
    )
}

export default NotePage
