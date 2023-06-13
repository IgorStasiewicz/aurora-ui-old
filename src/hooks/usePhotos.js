import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_URL = `${process.env.REACT_APP_API_PHOTOS}`;
const QUERY_KEY = 'photos';

const getPhotos = async () => {
  const { data } = await axios.get(`${API_URL}/GetAllCollections`);
  return data?.collections ?? [];
};

export const usePhotosQuery = () => {
  return useQuery([QUERY_KEY], () => getPhotos());
};

