import React,{useState,useEffect} from 'react'
import { Box, Button, Typography, Modal, Stack,Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, InputAdornment, Fade, Backdrop} from '@mui/material'
import { patchApi } from '../../src/utils/adminApi'
import LoadingButton from '@mui/lab/LoadingButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function VideoForm(props) {
    const [item,setItem] = useState(props.item ||{})
    const [_id] = useState(item._id || '')
    const [title, setTitle] = useState(item.title || '')
    const [link, setLink] = useState(item.link || '')
    const [loading,setLoading] = useState(false)
    const createHandler = async()=>{
        setLoading(true)
        const {error,data} = await patchApi('/course?action=add',{
            _id:item.course_id, video:{title,link}
        })
        setLoading(false)
        if(props.onNewData){
            props.onNewData(data)
        } 
    }
    useEffect(()=>{
        if(props.item){
            setItem(props.item)
        }
        return
    },[props.item])
    return (
        <Box
            shadow='1'
            p='2'
            mb='5'
            _light={{background:'gray.100'}}
            
        >
            <Typography variant='h5' >Video</Typography>
            <Grid container spacing={2} >
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Title" 
                        variant="outlined" 
                        fullWidth
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    /> 
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Video Link" 
                        variant="outlined" 
                        fullWidth
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}
                    /> 
                </Grid>
                <Grid item >
                    {true && 
                        <LoadingButton 
                            loading={loading}
                            variant='contained' 
                            loadingPosition="start"
                            startIcon={<AddCircleIcon />}
                            sx={{
                                margin:'15px'
                            }}
                            onClick={createHandler}
                        >
                            Add 
                        </LoadingButton>
                    }
                    {_id && 
                        <LoadingButton 
                            loading={loading}
                            variant='contained' 
                            loadingPosition="start"
                            startIcon={<AddCircleIcon />}
                            sx={{
                                margin:'15px'
                            }}
                            onClick={createHandler}
                        >
                            Delete  
                        </LoadingButton>
                    }
                </Grid>
            </Grid>
        </Box>
    )
}

export default VideoForm
