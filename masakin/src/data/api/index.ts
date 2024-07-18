import axios from "axios";
import { recipeDetailType } from "@/data/Type"

const API_BASE_URL = "https://masakinprojectbe.vercel.app";

export async function fetchRecipeList() {
  try {
    const res = await axios.get(`${API_BASE_URL}/recipe/all`)
    console.log(res.data)
    return res.data
  } catch (err) {
    console.log(err)
    return []
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

export async function fetchRecipeByCountry(recipeCountry: string): Promise<recipeDetailType[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipe/country/${recipeCountry}`);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
}


export async function fetchUser(token: string) {
  try {
    const res = await axios.get(`${API_BASE_URL}/user/profile`, { headers: { Authorization: `Bearer ${token}` } })
    console.log(res.data)
    return res.data
  } catch (err) {
    console.log(err)
    return []
  }
}