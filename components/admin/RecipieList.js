import { Box } from '@mui/material'
import React from 'react'
import RecipieItem from './RecipieItem'

function RecipieList({recipies}) {
    return (
        <Box
            sx={{
                display:'flex',
                justifyContent:'space-between',
                flexWrap:'wrap'
            }}
        >
            {
                recipies && recipies.map((recipie,index)=>{
                    return <RecipieItem recipie={recipie} key={index} />
                })
            }
        </Box>
    )
}

export default RecipieList