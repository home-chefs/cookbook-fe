// src/components/catalog/RecipeCard.jsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function RecipeCard({ recipe }) {
  const {
    id,
    name = 'Неизвестна рецепта',
    time_to_cook,
    cover_image_path = ''
  } = recipe || {};

  const imgSrc = cover_image_path
    ? `/${cover_image_path}`
    : '/images/placeholder.jpg';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={imgSrc}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        {time_to_cook && (
          <Typography variant="body2" color="text.secondary">
            Време за приготвяне: {time_to_cook}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          component={Link}
          to={`/details/${id}`}
          size="small"
          variant="contained"
        >
          Виж повече
        </Button>
      </CardActions>
    </Card>
  );
}
