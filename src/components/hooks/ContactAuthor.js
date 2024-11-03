import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Tooltip,
  Zoom,
  Avatar
} from '@mui/material';
import {
  Facebook,
  Instagram,
  GitHub,
  Email,
  Language
} from '@mui/icons-material';

const ContactAuthor = () => {
  const socialLinks = [
    {
      icon: <Facebook />,
      url: "https://www.facebook.com/mrdatdepzai",
      label: "Facebook",
      color: "#1877f2"
    },
    {
      icon: <Instagram />,
      url: "https://www.instagram.com/mrdatdepzai",
      label: "Instagram",
      color: "#e4405f"
    },
    {
      icon: <GitHub />,
      url: "https://github.com/mrdatdepzai",
      label: "GitHub",
      color: "#333"
    },
    {
      icon: <Email />,
      url: "mailto:dat037sk@gmail.com",
      label: "Email",
      color: "#ea4335"
    },
    {
      icon: <Language />,
      url: "https://luubut.netlify.app",
      label: "Website",
      color: "#2196f3"
    }
  ];

  return (
    <Card 
      className="card-hover"
      sx={{ 
        mt: 2,
        mb: 2,
        borderRadius: '12px',
        background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)'
      }}
    >
      <CardContent>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2 
        }}>
          <Avatar
            src="https://img.upanh.tv/2024/11/03/milan.jpg"
            sx={{ 
              width: 80, 
              height: 80, 
              mb: 2,
              border: '3px solid #fff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              mb: 0.5
            }}
          >
            Nguyen Huu Dat
          </Typography>
          <Typography 
            variant="subtitle2" 
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            @mrdatdepzai
          </Typography>
        </Box>
        
        <Box 
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap'
          }}
        >
          {socialLinks.map((social, index) => (
            <Tooltip 
              key={index}
              title={social.label}
              TransitionComponent={Zoom}
              arrow
            >
              <IconButton
                onClick={() => window.open(social.url, '_blank')}
                sx={{
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    color: social.color,
                    backgroundColor: 'rgba(0,0,0,0.04)'
                  }
                }}
              >
                {social.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ContactAuthor; 