import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function UserItem({user}) {
    console.log(user)
    return (
        <Grid
            container
            spacing={0}
            sx={{
                boxShadow:1,
                padding:2,
            }}
        >
            <Grid item xs={4}>
                <Typography >{user.username}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography >{user.fullname}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography >{user.email}</Typography>
            </Grid>
        
        </Grid>
    )
}

export default UserItem