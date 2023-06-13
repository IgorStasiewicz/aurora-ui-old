import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const API_URL = `${process.env.REACT_APP_API_TRAVELS}`;
const QUERY_KEY = 'meals';

const getMeals = async () => {
  const { data } = await axios.get(`${API_URL}/GetAllMeals`);
  return data?.meals ?? [];
};


export const useMealsQuery = () => {
  return useQuery([QUERY_KEY], () => getMeals());
};

