import React from 'react'
import { Fab } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeButton = ({setMode, modeTheme}) => {
  return (
    <Fab 
    color="primary"
    aria-label="change theme"
    sx={{
        position: 'fixed',
        bottom: {xs: 16, md: 30,},
        right: {xs: 16, md: 30,},
        zIndex: 1000,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'rotate(180deg)',
        },
        animation: modeTheme ? 'none' : 'ripple 0.6s linear',
        '@keyframes ripple': {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
    }}
    onClick={() => {setMode(!modeTheme)}}
    >
        <DarkModeIcon />
    </Fab>
  )
}

export default ThemeButton