import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Box sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          background: `
            linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ),
            url(/hero.jpg) 
            center/cover 
            no-repeat
          `,
          color: '#fff',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" sx={{ mb: 2 }}>
            Добре дошли в „Рецептите на баба“
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Мястото, където можете да откриете и споделите любимите си рецепти!
          </Typography>
          <Button
            component={Link}
            to="/catalog"
            variant="contained"
            color="primary"
            size="large"
            sx={{ mr: 2 }}
          >
            Разгледайте всички рецепти
          </Button>
          <Button
            component={Link}
            to="/create"
            variant="outlined"
            color="inherit"
            size="large"
          >
            Добавете нова рецепта
          </Button>
        </Container>
      </Box>

      <Container sx={{ mt: 4, mb: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Защо да използвате нашия рецептурник?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Тук ще откриете разнообразие от рецепти за всякакви поводи, 
          като всяка може да бъде оценявана, споделяна и модифицирана. 
          Също така можете да качите собствените си кулинарни шедьоври!
        </Typography>
        <Button
          component={Link}
          to="/catalog"
          variant="contained"
          color="secondary"
        >
          Научете повече
        </Button>
      </Container>
    </Box>
  );
}
