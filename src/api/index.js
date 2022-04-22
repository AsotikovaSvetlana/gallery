import axios from 'axios';

export const getData = async () => {
  const instance = axios.create({
    baseURL: 'https://picsum.photos/v2/list?limit=24',
  });

  return await instance.get();
}