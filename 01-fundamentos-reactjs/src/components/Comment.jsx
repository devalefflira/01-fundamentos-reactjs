import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import perfil from '../assets/perfil.jpeg';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src={perfil} />
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
          <p>Muito bom, Áleff. parabéns!</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
      
    </div>
  )
}