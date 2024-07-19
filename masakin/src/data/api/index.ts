import axios from "axios";
import { recipeDetailType, userDetailType } from "@/data/Type"

const API_BASE_URL = "https://masakinprojectbe.vercel.app";

async function apiGetRequest<T>(url: string, token: string): Promise<T> {
  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export async function fetchUser(token: string): Promise<any> { 
  return apiGetRequest(`${API_BASE_URL}/user/profile`, token);
}

export async function fetchRecipeByUpdate(token: string): Promise<recipeDetailType[]> {
  return apiGetRequest(`${API_BASE_URL}/recipe/all`, token);
}

export async function fetchRecipeByRating(token: string): Promise<recipeDetailType[]> {
  return apiGetRequest(`${API_BASE_URL}/recipe/all/popular`, token);
}

export async function fetchRecipeByCountry(recipeCountry: string, token: string): Promise<recipeDetailType[]> {
  return apiGetRequest(`${API_BASE_URL}/recipe/country/${recipeCountry}`, token);
}

export async function fetchRecipeById(recipeId: string, token: string): Promise<recipeDetailType> {
  return apiGetRequest(`${API_BASE_URL}/recipe/${recipeId}`, token);
}