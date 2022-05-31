import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AdminLayout from '../../../components/admin/AdminLayout'
import RecipieList from '../../../components/admin/RecipieList'
import { fetchRecipie } from '../../../src/redux/actions/recipie'
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import RecipieForm from '../../../components/admin/RecipieForm'
function Recipie(props) {
    console.log(props)
    const [recipieForm, setRecipieForm] = useState(false)
    useEffect(() => {
        if(props.recipie && props.recipie.recipies.length == 0 ){
            fetchRecipie()
        }
        return () => {
            
        };
    }, []);
    return (
        <div>
            {props.recipie && 
                <RecipieList recipies={props.recipie.recipies} />
            }
            <Box
                sx={{
                    position:'fixed',
                    bottom:5,
                    right:5
                }}
            >
                <Fab aria-label="add" onClick={()=>setRecipieForm(true)}>
                    <AddIcon  />
                </Fab>
            </Box>
            <Modal 
                open={recipieForm} 
                sx={{alignItems:'center',overflow:'auto'}}  
                onClose={()=>setRecipieForm(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                keepMounted
            >
                <Fade in={recipieForm} >
                    <Box sx={style} >
                        <RecipieForm 
                            setRecipieForm={setRecipieForm} 
                        />
                    </Box>
                </Fade>
                
            </Modal>
        </div>
        
    )
}
Recipie.Layout = AdminLayout
const mapStateToProps = state => state
export default connect(mapStateToProps) (Recipie)

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