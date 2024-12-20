import { useMemo } from 'react';
import { useCommentsApi } from '../services/useCommentsApi';
import { CommentCard } from './CommentCard';
import { ArrowElbowRightUp, Plus, Spinner } from '@phosphor-icons/react';

export function CommentCardList() {
   const { data, isLoading, isError, error, hasNextPage, fetchNextPage } =
      useCommentsApi();

   const comments = useMemo(() => {
      return data?.pages.reduce((acc, page) => {
         return [...acc, ...page];
      });
   }, [data]);

   if (isLoading) {
      return (
         <div className='flex items-center justify-center gap-2'>
            <Spinner size={22} className='animate-spin-slow' />
            <p className='text-center my-10 animate-pulse'>Carregando...</p>
         </div>
      );
   }

   if (isError) {
      console.error(`Erro: ${error.message}`);
      return (
         <div className='text-center my-10'>
            <p>Não foi possível se conectar com a API.</p>
            <p>Tente novamente mais tarde.</p>
         </div>
      );
   }

   return (
      <>
         <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>
            {comments?.map(({ id, name, email, body }) => (
               <CommentCard key={id} id={id} name={name} email={email} body={body} />
            ))}
         </div>

         <div className='flex flex-col items-center justify-center gap-2 text-center mt-5'>
            {hasNextPage ? (
               <button
                  onClick={fetchNextPage as React.MouseEventHandler<HTMLButtonElement>}
                  className='flex items-center justify-center gap-2 w-full bg-zinc-900 hover:opacity-80 focus:outline-none p-4 rounded-lg'
               >
                  <Plus size={16} />
                  Carregar mais
               </button>
            ) : (
               <>
                  <p>Todos os comentários foram carregados.</p>
                  <p>
                     <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='flex items-center gap-2 hover:underline focus:outline-none'
                     >
                        Voltar para o topo <ArrowElbowRightUp size={16} />
                     </button>
                  </p>
               </>
            )}
         </div>
      </>
   );
}
