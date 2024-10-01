export interface LoginResponse {
  user: { id: string; name: string; email: string; role: string };
  access_token: string;
  refresh_token: string;
}

export interface ListResponse<T> {
  data: T[];
  total: number;
  page: number;
  items_per_page: number;
}
