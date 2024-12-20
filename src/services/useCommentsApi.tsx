import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';
import { CommentProps } from '../types/comment';

interface QueryKeyProps {
   pageParam: number;
}

const LIMIT_PER_PAGE = 50;

const fetchComments = async ({ pageParam }: QueryKeyProps) => {
   const response = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?_page=${pageParam}&_limit=${LIMIT_PER_PAGE}`
   );
   const data: CommentProps[] = response.data;
   return data;
};

export function useCommentsApi() {
   const query = useInfiniteQuery({
      queryKey: ['comments'],
      queryFn: ({ pageParam }) => fetchComments({ pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
         return lastPage.length ? allPages.length + 1 : undefined;
      },
   });

   return query;
}
