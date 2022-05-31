import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Stack, IconButton, Backdrop, Fade, Modal } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import { useRouter } from 'next/router';
import RecipieForm from './RecipieForm'

function RecipeItem({recipie}) {
	const theme = useTheme()
	const router = useRouter()
	const [recipieForm,setRecipieForm] =useState(false)
    return (
        <div>
			<Box width='350px'
				sx={{
					// background:'white',
					margin:'10px',
					bgcolor: 'background.paper',
					boxShadow: `0 2px 4px rgb(0 0 0 / 8%)`,
					color:'text.primary',
					borderRadius:'0.25rem'
					
				}}
				shadow={2}
			>
				<img src={recipie.image} width='100%' height='200px' />
				<Box
					sx={{
						padding:2,
						paddingTop:1
					}}
				>
					<Typography  variant='h5' >{recipie.name}</Typography>
                    <Typography  variant='caption' >{recipie.description}</Typography>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'space-between'
						}} 
					>
						<Typography  variant='p' >Price</Typography>
						<Typography  variant='p'  >
							₹{recipie.price}
						</Typography>
					</Stack>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'space-between'
						}} 
					>
						<Typography  variant='p' >Rating</Typography>
						<Typography  variant='p'  >
							★{(recipie.rating.rated)/(recipie.rating.count)}
						</Typography>
					</Stack>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'flex-end',
							marginTop:'4px'
						}} 
					
					>
						<IconButton 
							onClick={()=>setRecipieForm(true)}
						>
							<EditIcon />
						</IconButton>
						{/* <IconButton
							onClick={()=>router.push('/admin/recipie/edit?_id='+recipie._id)}
						>
							<OpenInFullIcon />
						</IconButton>	 */}
					</Stack>	
				</Box>
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
                                recipie={recipie} 
                                setRecipieForm={setRecipieForm} 
                            />
                        </Box>
                    </Fade>
                    
                </Modal>
        </div>
    )
}

export default RecipeItem
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
