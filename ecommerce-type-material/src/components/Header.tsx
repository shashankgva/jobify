import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ProfileLink } from '../types';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const profileLinks: ProfileLink[] = [
    {
      name: 'Orders',
      href: '/orders',
    },
    {
      name: 'Wishlist',
      href: '/wishlist',
    },
  ];

  const handleMenuOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        {/* Logo */}
        <Button component={Link} to="/">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'primary.main' }}
          >
            MyStore
          </Typography>
        </Button>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mx: 2,
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
          <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
          <InputBase placeholder="Search Products" sx={{ width: '100%' }} />
        </Box>
        <Button component={Link} to="/cart" color="inherit">
          Cart
        </Button>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          onClick={handleMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {profileLinks.map((link) => (
            <MenuItem key={link.name} onClick={handleMenuClose}>
              {link.name}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
