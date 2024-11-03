import React from 'react';
import { Box, IconButton } from '@mui/material';
import { SkipPrevious, PlayArrow, Pause, SkipNext } from '@mui/icons-material';

const AudioControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
      <IconButton onClick={onPrevClick}>
        <SkipPrevious />
      </IconButton>
      <IconButton onClick={onPlayPauseClick}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <IconButton onClick={onNextClick}>
        <SkipNext />
      </IconButton>
    </Box>
  );
};

export default AudioControls; 