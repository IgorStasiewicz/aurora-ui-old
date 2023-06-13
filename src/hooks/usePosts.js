import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = `${process.env.REACT_APP_API_POSTS}`;
const QUERY_KEY = 'posts';
const MUTATION_KEY = 'post';

const getPosts = async () => {
  const { data } = await axios.get(`${API_URL}/GetAllPosts`);
  return data?.posts ?? [];
};

const addPost = async (body) => await axios.post(`${API_URL}/AddPost`, body);

export const usePostsQuery = () => useQuery([QUERY_KEY], () => getPosts());

export const usePostsMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: MUTATION_KEY,
    mutationFn: (body) => addPost(body),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
  })
};
