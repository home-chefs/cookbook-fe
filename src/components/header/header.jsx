import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            MyCookBook
          </Link>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" color="inherit">
            Начало
          </Button>
          <Button component={Link} to="/catalog" color="inherit">
            Каталог
          </Button>
          <Button component={Link} to="/create" color="inherit">
            Добави рецепта
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
