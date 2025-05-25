import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import recipeAPI from '../../api/recipes';
import { useNavigate } from 'react-router-dom';

export default function CreateRecipe() {
  const [formData, setFormData] = useState({
    name: '',
    time_to_cook: '',
    source: '',
    video_link: '',
    directions: '',
    cover_image_path: '',
    products: [{ name: '', amount: '', amount_type: '' }]
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (index, field, value) => {
    const updated = [...formData.products];
    updated[index][field] = value;
    setFormData((prev) => ({ ...prev, products: updated }));
  };

  const addProduct = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, { name: '', amount: '', amount_type: '' }]
    }));
  };

  const removeProduct = (index) => {
    const updated = [...formData.products];
    updated.splice(index, 1);
    setFormData((prev) => ({ ...prev, products: updated }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await recipeAPI.createRecipe(formData);
      navigate('/catalog');
    } catch (err) {
      console.error('Error creating recipe:', err);
    }
  };

  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" gutterBottom>
        Създай нова рецепта
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Име на рецепта" name="name" value={formData.name} onChange={handleChange} required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Време за готвене (напр. 45m0s)" name="time_to_cook" value={formData.time_to_cook} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Източник (напр. баба ти)" name="source" value={formData.source} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="YouTube линк" name="video_link" value={formData.video_link} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Път до снимката (напр. pasta.jpg)" name="cover_image_path" value={formData.cover_image_path} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={5} label="Инструкции" name="directions" value={formData.directions} onChange={handleChange} />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Продукти
            </Typography>
            {formData.products.map((product, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 1 }}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Продукт"
                    value={product.name}
                    onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Количество"
                    value={product.amount}
                    onChange={(e) => handleProductChange(index, 'amount', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Тип количество"
                    value={product.amount_type}
                    onChange={(e) => handleProductChange(index, 'amount_type', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={2} sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton onClick={() => removeProduct(index)} disabled={formData.products.length === 1}>
                    <RemoveCircleOutline />
                  </IconButton>
                  {index === formData.products.length - 1 && (
                    <IconButton onClick={addProduct}>
                      <AddCircleOutline />
                    </IconButton>
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Запиши рецепта
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
