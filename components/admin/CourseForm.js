import React,{ useState, useEffect } from 'react'
import { Box, Button, Typography, Modal, Stack,Chip, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, InputAdornment, Fade, Backdrop} from '@mui/material'
import dynamic from 'next/dynamic';
// import { EditorProps } from 'react-draft-wysiwyg'
// const Editor = dynamic(
// () => import('react-draft-wysiwyg').then(mod => mod.Editor),
// { ssr: false })  

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// const htmlToDraft = dynamic(
//     () => import("html-to-draftjs"), 
//     {
//     ssr: false
// });
// import CoursePreview from './CoursePreview';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { patchApi,deleteApi, postApi } from '../../src/utils/adminApi';
import { useRouter } from 'next/router';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VideoForm from './VideoForm';
function CourseForm(props) {
    console.log(props)
    // console.log(props)
    let { item } = props
    if(!item){
        item={}
    }
    console.log(item)
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar();
    const [_id] = useState(item._id || '')
    const [title,setTitle] = useState(item.title || '')
    const [description,setDescription] = useState(item.description || '')
    const [poster,setPoster] = useState(item.poster || '')
    const [price,setPrice] = useState(item.price || '')
    const [type,setType] = useState(item.type || 'live')
    const [validity, setValidity] = useState(item.validity || '')
    const [live_link,setLiveLink] = useState(item.live_link || '')
    const [status,setStatus] = useState(item.status || 'private')
    const [html, setHtml] = useState(item.html || '')
    const [loading,setLoading] =useState(false)
    const [small_description,setSmallDescription] = useState(item.small_description || '')
    const [editor,setEditor] = useState('')
    const [alert_modal,setAlertModal] = useState(false)

    const [alertWindow, setAlertWindow] = useState(false)
    const [open,setOpen] = useState('')
    const onStateChange = (state) =>{
        setEditor(state)
        setHtml(draftToHtml(convertToRaw(state.getCurrentContent())))
    }
    const courseCreateHandler = async()=>{
        setLoading(true)
        const {data,error} = await postApi('/course',{
            title,description,poster,price,type,validity,live_link,status,html,small_description
        })
        if (error) {
            enqueueSnackbar(error, {
                variant: 'error'
            })
        } else {
            enqueueSnackbar("Created Successfully", {
                variant: 'success'
            })
        }
        setLoading(false)
    }
    const courseUpdateHandler = async ()=>{
        setLoading(true)
        const {data,error} = await patchApi(`/course?action=replace`,{
            _id,title, description, poster, price, type, validity, live_link, status, html, small_description
        })
        setLoading(false)
        if (error) {
            enqueueSnackbar(error, {
                variant: 'error'
            })
        } else {
            enqueueSnackbar("Updated Successfully", {
                variant: 'success'
            })
        }
        setLoading(false)
    }
    const courseDeleteHandler = async()=>{
        setLoading(true)
        const {data,error} = await deleteApi('/course',{_id})
        if(error){
            return enqueueSnackbar(error, {
                variant: 'error'
            })
        }
        enqueueSnackbar("Delete Successfully", {
            variant: 'success'
        })
        setLoading(false)
        router.push('/admin/course')
    }
    
    useEffect(()=>{
        return
    },[item])
    
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                padding:'10px',
                position:'relative',
            }}
        >
            <Grid container spacing={2} justifyContent='center' mt={1}>
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
                        label="Small Description" 
                        variant="outlined" 
                        fullWidth
                        value={small_description}
                        onChange={(e)=>setSmallDescription(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Validity" 
                        type='number'
                        variant="outlined" 
                        fullWidth
                        value={validity}
                        onChange={(e)=>setValidity(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Poster" 
                        variant="outlined" 
                        fullWidth
                        value={poster}
                        onChange={(e)=>setPoster(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Price" 
                        variant="outlined" 
                        fullWidth
                        value={price}
                        onChange={(e)=>setPrice(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Live link" 
                        variant="outlined" 
                        fullWidth
                        value={live_link}
                        onChange={(e)=>setLiveLink(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Description" 
                        variant="outlined" 
                        fullWidth
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />    
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Type"
                            onChange={(e)=>setType(e.target.value)}
                        >
                            <MenuItem value='live'>Live</MenuItem>
                            <MenuItem value='live-pre'>Live and Recored</MenuItem>
                            <MenuItem value='pre-recorded'>Recorded</MenuItem>
                        </Select>
                    </FormControl>   
                </Grid>
                 <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={status}
                            label="Status"
                            onChange={(e)=>setStatus(e.target.value)}
                        >
                            <MenuItem value='private'>Private</MenuItem>
                            <MenuItem value='upcoming'>Upcoming</MenuItem>
                            <MenuItem value='public'>Public</MenuItem>
                        </Select>
                    </FormControl>   
                </Grid>
                <Grid item xs={12}>
                    {_id&&  
                        <LoadingButton 
                            loading={loading}
                            variant='contained' 
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            sx={{
                                margin:'15px'
                            }}
                            onClick={courseUpdateHandler}
                        >
                            Update
                        </LoadingButton> 
                    }
                    {_id && 
                        <LoadingButton 
                            loading={loading}
                            variant='contained' 
                            loadingPosition="start"
                            startIcon={<DeleteIcon />}
                            sx={{
                                margin:'15px'
                            }}
                            // onClick={courseDeleteHandler}
                            onClick={()=>setAlertWindow(true)}
                        >
                            Delete
                        </LoadingButton>
                    } 
                    <LoadingButton 
                        loading={loading}
                        variant='contained' 
                        loadingPosition="start"
                        startIcon={<AddCircleOutlineIcon />}
                        sx={{
                            margin:'15px'
                        }}
                        onClick={courseCreateHandler}
                    >
                        {_id?'Create Copy':'Create New'}
                    </LoadingButton> 
                    
                </Grid>
            </Grid>
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
                        opacity:.95
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
                            // onClick={removeHandler}
                            onClick={courseDeleteHandler}
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
    )
}

export default CourseForm
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    width: '90%',
    borderRadius: 2
}