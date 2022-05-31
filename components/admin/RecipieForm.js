import React,{ useState, useEffect } from 'react'
import { Box, Button,Modal, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, TextField, InputAdornment, Fade, Backdrop} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack';
import LoadingButton from '@mui/lab/LoadingButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { patchApi,deleteApi, postApi } from '../../src/utils/adminApi';
import { useRouter } from 'next/router';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { updateRecipies } from '../../src/redux/actions/recipie'
function CourseForm(props) {
    // console.log(props)
    let { recipie } = props
    if(!recipie){
        recipie={}
    }
    const router = useRouter()
    const { enqueueSnackbar } = useSnackbar();
    const [_id] = useState(recipie._id || '')
    const [name,setName] = useState(recipie.name || '')
    const [description,setDescription] = useState(recipie.description || '')
    const [image,setImage] = useState(recipie.image || '')
    const [price,setPrice] = useState(recipie.price || '')
    const [alertWindow, setAlertWindow] = useState(false)
    const [loading,setLoading]  = useState(false)
    const [open,setOpen] = useState('')
    const recipieCreateHandler = async()=>{
        setLoading(true)
        const {data,error} = await postApi('/recipie',{
            name,description,image,price,
        })
        if (error) {
            enqueueSnackbar(error, {
                variant: 'error'
            })
        } else {
            enqueueSnackbar("Created Successfully", {
                variant: 'success'
            })
            if(props.setRecipieForm){
                
                props.setRecipieForm(false)
            }
            if(data.recipies){
                updateRecipies(data.recipies)
            }
        }
        setLoading(false)
    }
    const recipieUpdateHandler = async ()=>{
        setLoading(true)
        const {data,error} = await patchApi(`/recipie`,{
            _id,name, description, image, price, 
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
            if (props.setRecipieForm) {
                props.setRecipieForm(false)
            }
            if (data.recipies) {
                updateRecipies(data.recipies)
            }
        }
        setLoading(false)
    }
    const recipieDeleteHandler = async()=>{
        setLoading(true)
        const {data,error} = await deleteApi('/recipie',{_id})
        if(error){
            setLoading(false)
            return enqueueSnackbar(error, {
                variant: 'error'
            })
        }
        enqueueSnackbar("Delete Successfully", {
            variant: 'success'
        })
        if (props.setRecipieForm) {
            props.setRecipieForm(false)
        }
        if (data.recipies) {
            updateRecipies(data.recipies)
        }
        setLoading(false)
    }
    
    useEffect(()=>{
        return
    },[recipie])
    
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
                        label="Name" 
                        variant="outlined" 
                        fullWidth
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
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
                <Grid item xs={12}>
                    <TextField 
                        id="margin-none" 
                        label="Image" 
                        variant="outlined" 
                        fullWidth
                        value={image}
                        onChange={(e)=>setImage(e.target.value)}
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
                    {_id&&  
                        <LoadingButton 
                            loading={loading}
                            variant='contained' 
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            sx={{
                                margin:'15px'
                            }}
                            onClick={recipieUpdateHandler}
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
                            // onClick={recipieDeleteHandler}
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
                        onClick={recipieCreateHandler}
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
                            onClick={recipieDeleteHandler}
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