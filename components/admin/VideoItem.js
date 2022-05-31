import React,{ useState, } from 'react'
import { Box,Button, Typography } from '@mui/material'
import ReactPlayer from 'react-player/lazy'
import { patchApi } from '../../src/utils/adminApi'
import LoadingButton from '@mui/lab/LoadingButton'
import DeleteIcon from '@mui/icons-material/Delete';
function VideoItem({video,course_id,onNewData,preview}) {
    const [alertWindow,setAlertWindow] = useState(false)
    const [loading,setLoading] = useState(false)
    const removeHandler = async() =>{
        setLoading(true)
        const {error,data} = await patchApi('/course?action=remove',{
            _id: course_id, element_type: preview?'preview':'video', element_id: video._id
        })
        setLoading(false)
        setAlertWindow(false)
        if (onNewData && data) {
            onNewData(data)
        }
    }
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                padding:3,
                paddingBottom:1,
                margin:1,
                position:'relative',
                boxShadow:1,
                color: 'text.primary',
            }}
        >
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${video.link}`}
                controls
                width={355.4}
                height={200}
                config={{
                    youtube:{
                        playerVars:{
                            showinfo:0,
                            modestbranding:1,
                            rel:1
                        }
                    }
                }}
            />
            <Box
                sx={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            textTransform:'uppercase',

                        }}
                    >{video.title}</Typography>
                </Box>
                <Box>
                    <Button
                        onClick={()=>setAlertWindow(true)}
                    >
                        Remove
                    </Button>
                </Box>
                
            </Box>
            {alertWindow &&
                <Box
                    sx={{
                        position:'absolute',
                        bgcolor: 'background.paper',
                        top:0,
                        bottom:0,
                        left:0,
                        right:0,
                        zIndex:1,
                        opacity:.9,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            display:'flex',
                            flexDirection:'row'
                        }}
                    >
                        
                        <LoadingButton 
                            loading={loading}
                            // variant='contained' 
                            loadingPosition="start"
                            startIcon={<DeleteIcon />}
                            onClick={removeHandler}
                        >
                            Remove  
                        </LoadingButton>
                        <LoadingButton
                            onClick={()=>setAlertWindow(false)}
                        >Cancel </LoadingButton>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default VideoItem