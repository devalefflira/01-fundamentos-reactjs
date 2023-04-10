import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/devalefflira.png',
      username: 'Áleff Lira',
      role: 'Desenvolvedor Web' 
    },
    content: [
      {type: 'paragraph', content: 'Fala, Gabriel. Beleza?'},
      {type: 'paragraph', content: 'Acabei de subir a última alteração do meu primeiro projeto em ReactJs.'},
      {type: 'paragraph', content: 'Desenvolvi o projeto durante a trilha Ignite Reactjs, da Rocketseat.'},
      {type: 'paragraph', content: 'Depois me dá um feedback?'},
      {type: 'link', content: 'https://www.linkedin.com/in/aleff-lira-1157311a0/'},
    ],
    publishedAt: new Date('2023-04-10 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/devalefflira.png',
      username: 'Gabriel',
      role: 'Tech Lead' 
    },
    content: [
      {type: 'paragraph', content: 'Fala, Áleff. Beleza?'},
      {type: 'paragraph', content: 'Acabei de ver sua última alteração do projeto em React.'},
      {type: 'paragraph', content: 'Faz só os ajustes que eu te encaminhei por e-mail.'},
      {type: 'paragraph', content: '2 dias é um prazo razoável para a entrega?'},
      {type: 'link', content: 'https://www.google.com/'},
    ],
    publishedAt: new Date('2023-04-11 10:00:00'),
  },
];

export function App() {
  return (
  <div>

    <Header />

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
  
  </div>
  )
}