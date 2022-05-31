import React,{ useState, } from 'react'
import ReactPlayer from 'react-player/lazy'
import { patchApi } from '../../src/utils/adminApi'
import LoadingButton from '@mui/lab/LoadingButton'
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import { Box,Button, IconButton, Typography } from '@mui/material'
function NoteItem({note,course_id,onNewData,index}) {
    const [alertWindow,setAlertWindow] = useState(false)
    const [loading,setLoading] = useState(false)
    const removeHandler = async() =>{
        setLoading(true)
        const {error,data} = await patchApi('/course?action=remove',{
            _id: course_id, element_type: 'note', element_id: note._id
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
                width:'100%',
                margin:1,
                bgcolor:'background.paper',
                paddingLeft:2,
                paddingRight:2,
                marginLeft:2,
                marginRight:2,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                position:'relative',
                borderRadius:1,
                boxShadow:1,
                color: 'text.primary',
                marginBottom:0,
                
            }}
        >
            <Box>
                <Typography>{index+1}. {note.title.toString()}</Typography>
            </Box>
            <Box
                
            >
                <IconButton
                    onClick={()=>window.open(note.link)}
                    
                >
                    <LaunchIcon />
                </IconButton>
                <IconButton
                    onClick={()=>setAlertWindow(true)}
                >
                    <DeleteIcon />
                </IconButton>
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
                            opacity:.85
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            
                            <LoadingButton 
                                loading={loading}
                                // variant='contained' 
                                loadingPosition="start"
                                startIcon={<DeleteIcon />}
                                sx={{
                                    margin:'15px'
                                }}
                                onClick={removeHandler}
                            >
                                Remove  
                            </LoadingButton>
                            <Button
                                onClick={()=>setAlertWindow(false)}
                            >Cancel </Button>
                        </Box>
                    </Box>

                }
            </Box>
        </Box>
    )
}

export default NoteItem