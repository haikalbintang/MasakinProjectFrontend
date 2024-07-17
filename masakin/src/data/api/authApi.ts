import axios from "axios";
import { recipeDetailType } from "@/data/Type"

const API_BASE_URL = "https://masakinprojectbe.vercel.app";

export async function fetchRecipeList(): Promise<recipeDetailType[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/all`);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}

export async function fetchRecipeById(recipeId: string): Promise<recipeDetailType[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/${recipeId}`);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}