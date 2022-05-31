import React from 'react'
import { Box } from '@mui/material'
import NoteItem from './NoteItem'
function NoteList({notes,course_id,onNewData}) {
    return (
        <Box
            sx={{
                margin:0,
                display:'flex',
                justifyContent:'center',
                flexWrap:'wrap',
                bgcolor: 'background.body'
            }}
        >
            {notes && 
                notes.map((note,index)=>{
                    return <NoteItem note={note} course_id={course_id} onNewData={onNewData} index={index} key={index} />
                })
            }
        </Box>
    )
}

export default NoteList