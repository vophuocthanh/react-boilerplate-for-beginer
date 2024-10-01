export interface User {
  id: number;
  email: string;
  name: string;
  avatar: string;
  role: string;
}

export interface AccountResponse {
  email: string;
  password: string;
  confirmPassword?: string;
  name?: string;
  phone?: string;
}
