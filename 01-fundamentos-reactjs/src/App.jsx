import { Post } from './Post';

export function App() {
  return (
  <div>
   <Post  
    author="Autor 1" 
    content="Comentário ABC"
   />

   <Post
    author="Autor 2"
    content="Comentário DEF"
  />
  
  </div>
  )
}
