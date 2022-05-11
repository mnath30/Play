import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Programming",
    description: "Learn about programming",
  },
  {
    _id: uuid(),
    categoryName: "Music",
    description: "Groove to some music",
  },
  {
    _id: uuid(),
    categoryName: "Story",
    description: "Listen to some stories",
  },
  {
    _id: uuid(),
    categoryName: "Food",
    description: "Make something delicious",
  },
];
