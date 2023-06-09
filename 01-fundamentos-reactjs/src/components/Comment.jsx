import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log('deletar');

    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/devalefflira.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>

            <div className={styles.authorAndTime}>
              <strong>João Pedro</strong>
              <time title="06 de Abril de 2023 às 10:30h" dateTime="2023-04-05 10:30:00">Cerca de 1h atrás</time>
            </div>
            
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtidas Infinitas <span>{likeCount}</span>
          </button>
        </footer>

      </div>
      
    </div>
  )
}