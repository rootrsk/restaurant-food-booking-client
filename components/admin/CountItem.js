import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
function CountItem({title,counts,icon,growthIcon,color}) {
    return (
        <Box
            sx={{
                bgcolor:'background.paper',
                width:300,
                // height:150,
                boxShadow:1,
                margin:1,
                borderRadius:1,
                color:'text.primary',
                boxShadow: `0 2px 4px rgb(0 0 0 / 8%)`,
            }}
        >
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    padding:2
                }}
            >
                <Box>
                    <Typography 
                        variant='caption'
                        sx={{
                            color:'gray'
                        }} 
                    >
                            No Of {title}
                        </Typography>
                    <Typography 
                        variant='h4' 
                        sx={{
                            fontWeight:400,
                            marginTop:1,
                        }}
                    > 
                        {counts}
                    </Typography>
                </Box>
                {icon}
            </Box>
            
            
            <Divider />
            <Typography
                sx={{
                    padding:1
                }}
            >From Last Months</Typography>
        </Box>
    )
}

export default CountItem