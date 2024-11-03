import { styled } from '@mui/material/styles';

export const WaveAnimation = styled('div')({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '3px',
  height: '20px',
  marginBottom: '10px',
  
  '& span': {
    width: '3px',
    height: '100%',
    background: 'currentColor',
    borderRadius: '3px',
    animation: 'wave 1s ease infinite',
    '&:nth-of-type(2)': {
      animationDelay: '0.2s',
    },
    '&:nth-of-type(3)': {
      animationDelay: '0.4s',
    },
  },

  '@keyframes wave': {
    '50%': {
      height: '20%',
    }
  }
});

export default WaveAnimation; 