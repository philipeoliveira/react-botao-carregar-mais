import { CommentProps } from '../types/comment';

export function CommentCard({ id, name, email, body }: CommentProps) {
   return (
      <div className='flex flex-col gap-2 bg-zinc-900 rounded-lg py-6 px-8 max-md:px-6 relative'>
         <span className='flex items-center justify-center text-zinc-500 text-sm p-1 min-w-9 min-h-9 bg-zinc-950 absolute right-[calc(50%-18px)] -top-[14px] rounded-full border-4 border-zinc-900'>
            {id}
         </span>
         <h3>
            <span className='font-medium text-zinc-500 capitalize'>Título: </span>
            {name}
         </h3>
         <p>
            <span className='font-medium text-zinc-500'>E-mail: </span>
            {email}
         </p>
         <p>
            <span className='font-medium text-zinc-500'>Comentário: </span>
            {body}
         </p>
      </div>
   );
}
