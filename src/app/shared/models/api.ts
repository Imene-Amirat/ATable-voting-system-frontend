//facultatif, utilitaires DTO pour les appels API 
export interface ApiError { error: string; }

export type Id = number;

export interface VoteRequestDTO {
  dailyItemId: Id;
  userId?: Id; 
}

export interface DailyItemResponseDTO {
  id: Id;
  dishId: Id;
  restaurantId: Id;
  date: string;
  dishName?: string;
}

export interface VoteStatRow {
  dishName: string;
  count: number;
}
