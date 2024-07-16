export interface recipeDetailType {
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
