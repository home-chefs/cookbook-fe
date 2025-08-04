import * as requester from './requester';

const BASE_URL = import.meta.env.VITE_API_URL;
// const BASE_URL = 'http://localhost:8080/recipes';

export const getAllRecipes = async () => Object.values(await requester.get(BASE_URL));

export const getSingleRecipe = (id) => requester.get(`${BASE_URL}/${id}`);

export const createRecipe = (recipeData) => requester.post(BASE_URL, recipeData);

export const deleteRecipe = (id) => requester.del(`${BASE_URL}/${id}`);

export const editRecipe = (id, recipeData) => requester.put(`${BASE_URL}/${id}`, recipeData);

const recipeAPI = {
  getAllRecipes,
  getSingleRecipe,
  createRecipe,
  deleteRecipe,
  editRecipe,
};

export default recipeAPI;