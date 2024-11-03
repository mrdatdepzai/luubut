import React from 'react';
import { Box, Slider } from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const VolumeControl = ({ volume, onVolumeChange }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <VolumeDown />
      <Slider
        value={volume}
        onChange={onVolumeChange}
        aria-label="Volume"
        sx={{ width: 100 }}
      />
      <VolumeUp />
    </Box>
  );
};

export default VolumeControl; 