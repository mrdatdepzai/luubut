import React from 'react';
import { Box } from '@mui/material';

const AudioVisualizer = ({ isPlaying }) => {
  return (
    <Box
      sx={{
        height: 50,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: 1,
        mb: 2,
        '& .bar': {
          width: 4,
          backgroundColor: 'primary.main',
          animation: isPlaying ? 'visualizer 1s ease infinite' : 'none',
        },
        '@keyframes visualizer': {
          '0%': { height: '10%' },
          '50%': { height: '100%' },
          '100%': { height: '10%' }
        }
      }}
    >
      {Array(20).fill().map((_, i) => (
        <div 
          key={i} 
          className="bar" 
          style={{animationDelay: `${i * 0.05}s`}}
        />
      ))}
    </Box>
  );
};

export default AudioVisualizer; 