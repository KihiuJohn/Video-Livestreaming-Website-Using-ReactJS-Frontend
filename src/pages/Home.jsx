// Home.jsx
import React from 'react';
import { Box, Grid, Card, CardMedia, Typography } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Home() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);

  const handleSidebarToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // Toggle dark mode state
  const handleDarkModeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  // Create a theme based on the darkMode state
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
  });

  // Dummy data for video items
  const videoItems = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    title: `Video ${index + 1}`,
    thumbnail: 'https://via.placeholder.com/150', // Replace with actual thumbnail URLs
  }));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header setDarkMode={handleDarkModeToggle} darkMode={darkMode} onMenuClick={handleSidebarToggle} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar darkMode={darkMode} collapsed={collapsed} />
          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflowY: 'auto',
              ml: { xs: 0, md: collapsed ? '120px' : '250px' },
              transition: 'margin-left 0.3s',
              pt: 8, // Adjust top padding to make space for the header
            }}
          >
            <Grid container spacing={2} sx={{ p: 2 }}>
              {videoItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.thumbnail}
                      alt={item.title}
                    />
                    <Box sx={{ p: 1 }}>
                      <Typography variant="subtitle1">{item.title}</Typography>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
