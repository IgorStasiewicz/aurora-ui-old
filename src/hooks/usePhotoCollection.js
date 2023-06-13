import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const API_URL = `${process.env.REACT_APP_API_PHOTOS}`;
const QUERY_KEY = 'photo_collection';

const getPhotoCollection = async (id) => {
  const { data } = await axios.get(`${API_URL}/GetPhotoCollection/${id}`);
  return data?.photoCollection?.photos ?? [];
};

export const usePhotoCollectionQuery = () => {
  const { id } = useParams() || {};
  return useQuery([QUERY_KEY], () => getPhotoCollection(id));
};

