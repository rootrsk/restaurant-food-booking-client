import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import { Box,Typography, Stack, Button,IconButton, Backdrop, Fade, Modal } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CourseForm from './CourseForm';
import { useRouter } from 'next/router';
function CourseCard({item}) {
	const theme = useTheme()
	const router = useRouter()
	const [courseForm,setCourseForm] =useState(false)
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
				<img src={item.poster} width='100%' height='200px' />
				<Box
					sx={{
						padding:2,
						paddingTop:1
					}}
				>
					<Typography  variant='h5' >{item.title}</Typography>
					< Typography
						sx={{
							color:'blue'
						}}
					>
						{item.small_description}
					</Typography>
					<Typography  variant='p' >{item.title}</Typography>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'space-between'
						}} 
					>
						<Typography  variant='p' >Course Duration</Typography>
						<Typography  variant='p' >{item.validity} Months</Typography>
					</Stack>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'space-between'
						}} 
					>
						<Typography  variant='p' >Course Type</Typography>
						<Typography  variant='p'  >
							{item.type==='live-pre'?'Live and Recorded':'Live'}
						</Typography>
					</Stack>
					<Stack 
						sx={{
							display:'flex',
							flexDirection:'row',
							justifyContent:'space-between'
						}} 
					>
						<Typography  variant='p' >Status</Typography>
						<Typography  variant='p'  >
							{item.status}
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
							onClick={()=>setCourseForm(true)}
						>
							<EditIcon />
						</IconButton>
						<IconButton
							onClick={()=>router.push('/admin/course/edit?_id='+item._id)}
						>
							<OpenInFullIcon />
						</IconButton>	
					</Stack>	
				</Box>
			</Box>
            {/* <Box
				rounded="lg"
				overflow="hidden"
				shadow={3}
				_light={{ backgroundColor: '#fff' }}
				_dark={{ backgroundColor: 'darkBlue.900' }}
                height='410'
                width='300'
                m='2'
			>
				<Box >
					<>
						<Image
							source={{uri:item.poster}}
							alt={item.title}
							src={item.poster}
						/>
					</>
				</Box>
				<Stack p="4" space={3}>
					<Stack space={2}>
						<Typography size="md" ml="-1">
						    {item.title}
						</Typography>
						< Typography
							fontSize="xs"
							_light={{ color: 'violet.500' }}
							_dark={{ color: 'violet.300' }}
							fontWeight="500"
							ml="-0.5"
							mt="-1"
						>
						    {item.small_description}
						</Typography>
					</Stack>
					<Box height='100px' overflow='hidden' >
						<Typography fontWeight="400" textAlign='justify' >
							{item.description}
						</Typography>	
					</Box>
					
					<Box justifyContent='space-between' align="center" space={3} direction="row"  >
						<Typography fontSize="lg" > ₹ {item.price}</Typography>
						<Button 
							variant='outline'
							// onPress={()=>navigation.navigate("Course",{item})} 
						>
                            View More
                        </Button>
						<Button 
							variant='outline'
							// onPress={()=>navigate('/admin/edit/course',{
							// 	state:item
							// })} 
						>
                            Edit
                        </Button>
					</Box>
				</Stack>
			</Box> */}
			<Modal 
                    open={courseForm} 
                    sx={{alignItems:'center',overflow:'auto'}}  
                    onClose={()=>setCourseForm(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                    keepMounted
                >
                    <Fade in={courseForm} >
                        <Box sx={style} >
                            <CourseForm item={item} />
                        </Box>
                    </Fade>
                    
                </Modal>
        </div>
    )
}

export default CourseCard
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
