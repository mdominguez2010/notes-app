import React, {useEffect, useState} from 'react'
// import notes from '../assets/data'
import { Link, useParams } from 'react-router-dom'
import ArrowLeft from '../assets/ArrowLeft.png'

const NotePage = ({history = []}) => {

    let {noteId} = useParams()
    // let note = notes.find(note => note.id === Number(noteId))
    // let noteId = match.params.id
    
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated': new Date()})
        })
    }

    let handleSubmit = () => {
        updateNote()
        history.push("/")
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/">
                        <img src={ArrowLeft} alt="arrow-left" onClick={handleSubmit}/>
                    </Link>
                </h3>
            </div>
            
            <textarea onChange={(e)=> {setNote({...note, 'body':e.target.value})}} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage
