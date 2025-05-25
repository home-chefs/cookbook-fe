import { useState, useEffect } from 'react';
import recipeAPI from '../api/recipes';

export const useGetOneRecipe = (id) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      const result = await recipeAPI.getSingleRecipe(id);
      setRecipe(result);
    })();
  }, [id]);

  return [recipe, setRecipe];
};

export const useGetAllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeAPI.getAllRecipes().then(result => setRecipes(result));
  }, []);

  return [recipes];
};
