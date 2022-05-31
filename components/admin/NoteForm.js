import React,{ useState,useEffect } from 'react'
import { Box, Button, Typography, Modal, Stack,Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, InputAdornment, Fade, Backdrop} from '@mui/material'
import { patchApi } from '../../src/utils/adminApi'
import LoadingButton from '@mui/lab/LoadingButton'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NoteForm(props) {
    const [item, setItem] = useState(props.item || {})
    const [_id] = useState(item._id || '')
    const [title, setTitle] = useState(item.title || '')
    const [link, setLink] = useState(item.link || '')
    const [type,setType] = useState(item.type||'pdf')
    const [loading, setLoading] = useState(false)
    const crudHandler = async(operation) =>{
        setLoading(true)
        const response = operation==='Add'? await patchApi('/course?action=add',{
            _id:item.course_id,
            note:{title,link,type}
        }): await patchApi('/course?action=remove',{
            _id:item.course_id,element_type:'note',element_id:_id
        })
        console.log(response)
        setLoading(false)
        props.onApiCall(response,
            operation==='Add'?'Note Added Successfully':'Note Deleted Successfully.'
        )
    }
    const createHandler = async()=>{
        setLoading(true)
        const {error,data} = await patchApi('/course?action=add',{
            _id:item.course_id, note:{title,link,type}
        })
        setLoading(false)
        if (props.onNewData && data) {
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
            <Typography variant='h5' >Note</Typography>
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
                        label="Document Link" 
                        variant="outlined" 
                        fullWidth
                        value={link}
                        onChange={(e)=>setLink(e.target.value)}
                    /> 
                </Grid>
                <Grid item xs={12} md={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={(e)=>setType(e.target.value)}
                        >
                            <MenuItem value='image'>Image</MenuItem>
                            <MenuItem value='pdf'>Pdf</MenuItem>
                        </Select>
                    </FormControl>   
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
                </Grid>
            </Grid>
        </Box>
    )
}

export default NoteForm
