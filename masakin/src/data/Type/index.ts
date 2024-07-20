import { string } from "yup";
import { RecipeInfoById } from "../Mock/RecipeInfoById";

export interface recipeDetailTypeOld {
  id: number;
  title: string;
  image: string;
  rating: number;
  time: number;
  difficulty: number;
  description: string[];
  video: string;
  servings: number;
  ingredients: {
    number: string;
    name: string;
  }[];
  tools: string[];
  instructions: {
    text: string;
    image: string;
  }[];
}

export interface recipeDetailType {
  cooking_time: number;
  cooking_video: string;
  country_id: number;
  country_info: {
    code: string;
    country_name: string;
    created_at: string;
    id: number;
  }[];
  created_at: string;
  dificulty_level: number;
  food_image: string;
  food_info: string;
  food_name: string;
  how_to_cook_info: string | null;
  id: number;
  ingredient_info: string | null;
  instructions: string[];
  rating: number;
  source_of: string;
  updated_at: string;
  utensil_info: string | null;
  writen_by: number;
}

export interface recipeDetailTypeAPI {
  id: number;
  title: string;
  image: string;
  rating: number;
  time: number;
  difficulty: number;
  description: string[];
  video: string;
  servings: number;
  ingredients: {
    number: string;
    name: string;
  }[];
  tools: string[];
  instructions: {
    text: string;
    image: string;
  }[];
}

export interface recipeInfo {
  cooking_time: number;
  cooking_video: string;
  country_name: string;
  created_at: string;
  dificultly_level: number;
  food_image: string;
  food_info: string[];
  food_name: string;
  how_to_cook_info: {
    cooking_type_id: number;
    cooking_type_info: {
      image: string;
      info: string;
      name: string;
    }[];
    image: string[];
    instructions: string;
    recipe_id: number;
  }[];
  id: number;
  ingredient_info: {
    dose: string;
    ingredient_image: string;
    ingredient_info: string;
    ingredient_name: string;
    recipe_id: string;
  }[];
  instructions: string[];
  rating: string;
  serving: number;
  source_of: string;
  updated_at: string;
  utensil_info: {
    recipe_id: number;
    utensil_image: string;
    utensil_info: string;
    utensil_name: string;
  }[];
  written_by_name: string;
}
