import { Box } from '@mui/material'
import React from 'react'
import VideoItem from './VideoItem'

function VideoList({videos,course_id,onNewData,preview}) {
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
            {videos && 
                videos.map((video,index)=>{
                    return <VideoItem video={video} course_id={course_id} onNewData={onNewData} key={index} preview={preview}/>
                })
            }
        </Box>
    )
}

export default VideoList