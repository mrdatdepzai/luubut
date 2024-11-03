import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const AudioProgress = ({ progress, duration, onProgressChange }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Box sx={{ width: '100%', mt: 2, mb: 2 }}>
      <Slider
        value={progress}
        onChange={onProgressChange}
        aria-labelledby="audio-progress"
        sx={{ color: 'primary.main' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="caption">{formatTime(progress)}</Typography>
        <Typography variant="caption">{formatTime(duration)}</Typography>
      </Box>
    </Box>
  );
};

export default AudioProgress; 