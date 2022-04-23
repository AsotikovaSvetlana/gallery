import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://picsum.photos',
});

export const getData = async () => await instance.get('/v2/list?limit=24');

export const getImageInfo = async (id) => await instance.get(`/id/${id}/info`);