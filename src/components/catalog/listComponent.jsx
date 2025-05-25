// Catalog.jsx
import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import recipeAPI from '../../api/recipes';
import RecipeCard from './recipeCard';

export default function Catalog() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeAPI.getAllRecipes()
      .then((result) => {
        setRecipes(result);
      })
      .catch((err) => {
        console.error('Failed to fetch recipes:', err);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      {recipes.length > 0 ? (
        <Grid container spacing={2}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={recipe.id}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ textAlign: 'center', mt: 4 }}>
          Няма намерени рецепти.
        </Typography>
      )}
    </Container>
  );
}
