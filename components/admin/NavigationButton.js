import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

function NavigationButton({path,icon,name,open}) {
    const router = useRouter()
    console.log(router.asPath)
    return (
        <ListItemButton
            key={name}
            sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                background:router.asPath===path?'black':'',
                
            }}
            onClick={()=>router.push(path)}
        >
            <ListItemIcon
                sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: router.asPath === path ? 'white' : '',
                }}
            >
                {icon}
            </ListItemIcon>
            <ListItemText primary={name} 
                sx={{ 
                    opacity: open ? 1 : 0 ,
                    color: router.asPath === path ? 'white' : '',
                }} 
            />
        </ListItemButton>
    )
}

export default NavigationButton