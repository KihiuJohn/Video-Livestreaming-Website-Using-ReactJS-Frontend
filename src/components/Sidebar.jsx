import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, Avatar, Typography, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleIcon from '@mui/icons-material/Circle'; // Dot icon

const sidebarMenuItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Trending', icon: <TrendingUpIcon /> },
  { text: 'Latest', icon: <NewReleasesIcon /> },
  { text: 'Top Rated', icon: <StarBorderIcon /> },
  // Add more items as needed
];

const featuredChannels = [
  { name: 'Channel 1', viewCount: '1.2K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 2', viewCount: '850', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 3', viewCount: '3.5K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 4', viewCount: '2.1K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 5', viewCount: '950', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 6', viewCount: '1.0K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 7', viewCount: '4.3K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 8', viewCount: '3.8K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 9', viewCount: '2.9K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 10', viewCount: '1.5K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 11', viewCount: '2.6K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 12', viewCount: '3.2K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 13', viewCount: '1.8K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 14', viewCount: '2.4K', avatar: 'https://via.placeholder.com/40' },
  { name: 'Channel 15', viewCount: '3.0K', avatar: 'https://via.placeholder.com/40' },
];


function Sidebar({ darkMode, collapsed }) {
  const theme = useTheme();
  const sidebarWidth = collapsed ? 120 : 250; // Width for collapsed and non-collapsed states
  const headerHeight = 64; // Assuming the header height is 64px

  return (
    <Box
      sx={{
        width: sidebarWidth,
        height: `calc(100vh - ${headerHeight}px)`,
        display: { xs: collapsed ? 'none' : 'flex', md: 'flex' },
        flexDirection: 'column',
        padding: 2,
        borderRight: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.12)' : theme.palette.divider}`,
        backgroundColor: darkMode ? '#121212' : theme.palette.background.paper,
        transition: 'width 0.3s',
        position: 'fixed',
        top: headerHeight,
        overflowX: 'hidden',
        overflowY: collapsed ? 'scroll' : 'auto',
        zIndex: 1100, // Ensure sidebar stacks above main content
        ...(collapsed && {
          '&::-webkit-scrollbar': {
            width: '0px',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }),
      }}
    >
      <List>
        {sidebarMenuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              color: darkMode ? 'white' : 'black',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.04)',
              },
              padding: collapsed ? '8px' : '6px',
              flexDirection: collapsed ? 'column' : 'row',
              alignItems: 'center',
              textAlign: collapsed ? 'center' : 'left',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <ListItemIcon 
              sx={{ 
                color: darkMode ? 'white' : 'black', 
                minWidth: 'auto',
                display: 'flex',
                alignItems: 'center',
                marginRight: collapsed ? 0 : '15px',
              }}
            >
              {item.icon}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.text} sx={{ color: darkMode ? 'white' : 'black' }} />}
            {collapsed && (
              <Typography variant="body2" sx={{ color: darkMode ? 'white' : 'black', mt: 1 }}>
                {item.text}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2, borderColor: darkMode ? 'rgba(255, 255, 255, 0.12)' : theme.palette.divider }} />
      <Box sx={{ flexGrow: 1, width: '100%', boxSizing: 'border-box', position: 'relative' }}>
        {collapsed && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {featuredChannels.map((channel) => (
              <Box
                key={channel.name}
                sx={{ 
                  position: 'relative', 
                  mb: 1,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center', // Center avatars in the collapsed sidebar
                  '&:hover .view-count-container': {
                    visibility: 'visible',
                    opacity: 1,
                  },
                }}
              >
                <Avatar 
                  src={channel.avatar} 
                  alt={channel.name}
                  sx={{ width: 40, height: 40 }}
                />
                <Box 
                  className="view-count-container"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 'calc(100% + 10px)', // Position outside the sidebar
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgb(37,45,53)',
                    borderRadius: '12px',
                    padding: '2px 8px',
                    zIndex: 10, // Ensure it overlaps the sidebar
                    whiteSpace: 'nowrap', // Prevent text wrapping
                    color: 'white',
                    visibility: 'hidden',
                    opacity: 0,
                    transition: 'visibility 0.2s, opacity 0.2s',
                  }}
                >
                  <CircleIcon sx={{ color: 'rgb(83,252,24)', fontSize: '10px', mr: 0.5 }} />
                  <Typography variant="body2">{channel.viewCount}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
        {!collapsed && (
          <>
            <Typography variant="h6" sx={{ mb: 2, color: darkMode ? 'white' : 'black' }}>
              Featured Channels
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {featuredChannels.map((channel) => (
                <Box key={channel.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Avatar src={channel.avatar} alt={channel.name} />
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexGrow: 1 }}>
                    <Typography variant="body1" sx={{ color: darkMode ? 'white' : 'black' }}>{channel.name}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto', backgroundColor: 'rgb(37,45,53)', borderRadius: '12px', padding: '2px 8px' }}>
                      <CircleIcon sx={{ color: 'rgb(83,252,24)', fontSize: '10px', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ color: 'white' }}>{channel.viewCount}</Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default Sidebar;
