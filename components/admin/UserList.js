import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import UserItem from './UserItem'

function UserList({users}) {
    return (
        <Box
            sx={{
                // boxShadow:10,
                padding:2,
                bgcolor:'background.paper',
                color: 'text.primary',
            }}
        >
            <Grid
            container
            spacing={0}
            sx={{
                boxShadow:1,
                padding:2,
            }}
        >
            <Grid item xs={4}
                
            >
                <Typography fontWeight={700} >Username</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography fontWeight={700} >Full Name</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography fontWeight={700}>Email</Typography>
            </Grid>
        </Grid>
            {users &&
                users.map((user,index)=>{
                    return <UserItem user = {user} key= {index}  />
                })
            }
            
        </Box>
    )
}

export default UserList