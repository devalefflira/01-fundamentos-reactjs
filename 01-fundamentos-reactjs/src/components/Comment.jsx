import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content}) {
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
            
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Curtir <span>20</span>
          </button>
        </footer>

      </div>
      
    </div>
  )
}