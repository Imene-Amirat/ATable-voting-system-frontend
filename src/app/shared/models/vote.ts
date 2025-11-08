export interface Vote {
  id: number;
  userId: number;
  restaurantId: number;
  dailyItemId: number;
  date: string; // 'YYYY-MM-DD'
}
