import { Box } from '@mui/material'
import React from 'react'
import CountItem from './CountItem'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
function CountList(counts) {
    console.log(counts.counts)
    return (
        <Box
            
        >
            {counts && counts.counts &&
                <Box
                    sx={{
                        display:'flex',
                        flexDirection:'row',
                        marginTop:5,
                    }}
                >
                    <CountItem 
                        title='Users' 
                        icon={<PersonOutlineIcon style={{color:'blue'}} size={24} />} 
                        growthIcon={''} 
                        counts={counts.counts.users} 
                        key='users' 
                    />
                    <CountItem 
                        title='Payments' 
                        icon={<PaymentsOutlinedIcon style={{color:'green'}} size={24} />} 
                        growthIcon={''} 
                        counts={counts.counts.orders} 
                        key='payments' 
                    />
                    <CountItem 
                        title='Recipies' 
                        icon={<FastfoodOutlinedIcon style={{color:'purple'}} size={24} />} 
                        growthIcon={''} 
                        counts={counts.counts.recipies} 
                        key='payments' 
                    />
                    {/* <CountItem 
                        title='Notifications' 
                        icon={<NotificationsOutlinedIcon style={{color:'olive'}} size={24} />} 
                        growthIcon={''} 
                        counts={counts.counts.notifications} 
                        key='notifications' 
                    /> */}
                </Box>
            }
        </Box>
    )
}    

export default CountList