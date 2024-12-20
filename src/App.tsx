import { Comments } from './pages/Comments';
import { ArrowSquareOut } from '@phosphor-icons/react';

function App() {
   return (
      <div className='flex flex-col gap-10 max-w-6xl mx-auto min-h-screen'>
         <main className='flex-1 p-6 max-md:p-4'>
            <div className='flex flex-col gap-6'>
               <h1 className='bg-zinc-400 text-zinc-950 text-4xl max-sm:text-[28px] font-medium p-2 my-2 text-center rounded-lg'>
                  Botão Carregar mais
               </h1>
               <Comments />
            </div>
         </main>
         <footer>
            <p className='flex gap-1 justify-center text-sm p-4 border-t border-zinc-400'>
               Desenvolvido por{' '}
               <a
                  href='https://github.com/philipeoliveira'
                  title='Abrir em nova aba o GitHub do autor Philipe Oliveira'
                  target='_blank'
                  className='flex items-center gap-1 hover:underline'
               >
                  Philipe Oliveira
                  <ArrowSquareOut size={14} />
               </a>
            </p>
         </footer>
      </div>
   );
}

export default App;
