import { CommentCardList } from '../components/CommentCardList';
import { SquaresFour } from '@phosphor-icons/react';

export function Comments() {
   return (
      <div className='flex flex-col gap-7 p-5 max-md:px-3 rounded-lg border border-zinc-800'>
         <h2 className='flex justify-center items-center text-center gap-3 max-md:gap-2 text-[28px] max-md:text-2xl'>
            <SquaresFour size={27} className='mt-[2px] max-sm:hidden' />
            Lista de cards com comentários
         </h2>
         <CommentCardList />
      </div>
   );
}
