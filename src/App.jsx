import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toolbar } from '@mui/material';

import Header from './components/header/header';
import HomePage from './components/home';
import Catalog from './components/catalog/listComponent';
import RecipeDetails from './components/catalog/recipeDetails';
import CreateRecipe from './components/create/createRecipe';

function App() {
  return (
    <>
      <Header />
      <Toolbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<RecipeDetails />} />
        <Route path='/create' element={<CreateRecipe />} />
      </Routes>
    </>
  );
}

export default App;
