export interface DishCreate {
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  ingredients: string;
  veggie: boolean;
  spicy: boolean;
  vegan: boolean;
}
