export interface recipeDetail {
    title: string;
    image: string;
    rating: number;
    time: number;
    difficulty: number;
    description: string[];
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