export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface JwtPayload {
  user_id: number;
  email: string;
  exp: number;
  iat: number;
}