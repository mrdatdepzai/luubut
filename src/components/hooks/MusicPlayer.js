import React, { useState, useRef } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Modal,
  IconButton,
  Fade,
  Collapse,
  CardActionArea
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  PlayArrow,
  Pause,
  SkipNext,
  SkipPrevious,
  QueueMusic // Icon cho playlist
} from '@mui/icons-material';
import audioFile from './nhac.mp3'; // Thêm import file nhạc
import styled from '@mui/material/styles/styled';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#ffffff',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.palette.mode === 'dark' 
    ? 'none' 
    : '0 2px 4px rgba(0,0,0,0.1)',
}));

const MusicPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const currentTime = audioRef.current.currentTime;
      setProgress((currentTime / duration) * 100 || 0);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      audioRef.current.currentTime = (newProgress / 100) * duration;
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
        });
      }
      setPlaying(!playing);
    }
  };

  return (
    <>
      <Card sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        mb: 2,
        alignItems: 'center'
      }}>
        <CardActionArea onClick={() => setOpenModal(true)}>
          <CardMedia
            component="img"
            sx={{ width: { xs: '100%', md: 300 } }}
            image="https://img.upanh.tv/2024/06/05/imagec7ce1dca1af44cfb.png"
            alt="Live from space album cover"
          />
        </CardActionArea>

        <StyledBox>
          <CardContent sx={{ 
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1
          }}>
            {/* Title and Info */}
            <Typography variant="h5" component="div" sx={{
              fontWeight: 500,
              letterSpacing: 0.5,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
              textAlign: 'center'
            }}>
              Mình cầm băng đóng nhau
            </Typography>
            
            <Typography variant="subtitle1" color="text.secondary">
              A12-K4
            </Typography>
            
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              @mrdatdepzai
            </Typography>

            {/* Main Controls */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 2,
              width: '100%',
              justifyContent: 'center'
            }}>
              <IconButton onClick={() => {}} size="small">
                <SkipPrevious />
              </IconButton>
              <IconButton 
                onClick={handlePlayPause} 
                size="large"
                sx={{
                  '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s'
                  }
                }}
              >
                {playing ? <Pause /> : <PlayArrow />}
              </IconButton>
              <IconButton onClick={() => {}} size="small">
                <SkipNext />
              </IconButton>
              <IconButton onClick={() => setLiked(!liked)} size="small">
                {liked ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
            </Box>

            {/* Progress Bar */}
            <Box sx={{ 
              width: '100%', 
              mb: 2,
              px: 2 
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                style={{ 
                  width: '100%',
                  height: '4px',
                  borderRadius: '2px',
                  cursor: 'pointer'
                }}
              />
            </Box>

            {/* Lyrics Toggle & Playlist */}
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Button 
                variant="outlined" 
                size="small"
                onClick={() => setShowLyrics(!showLyrics)}
              >
                {showLyrics ? 'Hide Lyrics' : 'Show Lyrics'}
              </Button>
              <Button 
                variant="outlined" 
                color="success" 
                size="small"
                startIcon={<QueueMusic />}
                onClick={() => window.open("https://open.spotify.com/playlist/7toU7okc85X0gVDEOWcWYi?si=fcb559ec8603406c", "_blank")}
              >
                Playlist
              </Button>
            </Box>

            {/* Lyrics */}
            <Collapse in={showLyrics}>
              <Box sx={{ 
                textAlign: 'center', 
                mb: 2,
                maxWidth: '100%',
                px: 2,
                '& .verse': {
                  mb: 2
                }
              }}>
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{
                    whiteSpace: 'pre-line',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: 'text.secondary'
                  }}
                >
                  <div className="verse">
                    Mình cùng nhau đóng băng trước giây phút chúng ta chia xa
                    Thời học sinh lướt qua nhanh như giấc mơ không trở lại
                    Mình phải trải qua
                    Bạn đừng khóc mà
                    Bọn mình sẽ lớn, sẽ đi trên những con đường mới.
                  </div>

                  <div className="verse">
                    Là chưa hôm nào đến lớp sớm như hôm nay
                    Trời nắng nhẹ, êm đềm, gió lay
                    Là cảm xúc khó nói chỉ biết đứng ngẩn ngơ
                    Níu tà áo dài bay bay
                  </div>

                  {/* ... các verse khác tương tự ... */}
                </Typography>
              </Box>
            </Collapse>
          </CardContent>
        </StyledBox>
      </Card>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      />

      {/* Image Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        closeAfterTransition
        sx={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <Fade in={openModal}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}>
            <img
              src="https://img.upanh.tv/2024/06/05/imagec7ce1dca1af44cfb.png"
              alt="Enlarged view"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default MusicPlayer;
