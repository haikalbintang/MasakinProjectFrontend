"use client"
import { recipeDetailType } from "@/data/Type";
import React, { useEffect, useState } from "react";
import SmallCard from "@/components/RecipeCard/smallCard";
import axios from 'axios';

const API_BASE_URL = "https://masakinprojectbe.vercel.app";

async function fetchRecipeList() {
    // axios.get(`${API_BASE_URL}/recipe/all`)
    //     .then(res => {
    //         console.log(res.data)
    //         return res.data
    //     }).catch(err => {
    //         console.log(err)
    //         return []
    //     })

    try {
        const res = await axios.get(`${API_BASE_URL}/user/profile`)
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
        return []
    }
}

const NewRecipe: React.FC = () => {
    const [result, setResult] = useState<recipeDetailType[]>([])
    useEffect(() => {
        async function fetchData() {
            const recipes = await fetchRecipeList();
            setResult(recipes);
        }
        fetchData();
    }, [])

    return (
        <main>
            <div className="flex w-auto flex-row space-x-[7px] overflow-x-auto no-scrollbar">
                {result.map((recipe: recipeDetailType) => (
                    <SmallCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </main>
    )

}

export default NewRecipe