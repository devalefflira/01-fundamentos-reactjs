import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
  <div>

    <Header />

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
