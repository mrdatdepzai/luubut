import React from 'react';
import { Button } from '@mui/material';
import { Share } from '@mui/icons-material';

const ShareButton = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Mình cầm băng đóng nhau',
        text: 'Check out this awesome music!',
        url: window.location.href,
      });
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <Button 
      startIcon={<Share />}
      onClick={handleShare}
      sx={{
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      }}
    >
      Share
    </Button>
  );
};

export default ShareButton; 