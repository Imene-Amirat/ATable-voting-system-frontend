export interface DailyItem {
  id: number;
  dishId: number;
  restaurantId: number;
  date: string; // 'YYYY-MM-DD'
  // optionnel pour faciliter l’affichage
  dishName?: string;
  restaurantName?: string;
}
