// import modules
const express = require('express');
<<<<<<< HEAD
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/RecipeController');
=======

// import controllers
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
>>>>>>> cc1c7735ac70eff721470d1f5f16bdaf610630f3



// create router object for managing Recipe routes
const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getRecipeById);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

// export the RecipeRouter
module.exports = recipeRouter;