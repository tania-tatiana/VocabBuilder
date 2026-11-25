import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vocab-builder-backend.p.goit.global/api',
});

export type SignUpType = {
  name: string;
  email: string;
  password: string;
};

export async function signup(data: SignUpType) {
  const response = await api.post('/users/signup', data);

  return response.data;
}
