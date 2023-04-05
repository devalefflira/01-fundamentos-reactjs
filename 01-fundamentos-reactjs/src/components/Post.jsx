import styles from './Post.module.css';
import perfil from '../assets/perfil.jpeg';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={perfil} />
          <div className={styles.authorInfo}>
            <strong>Áleff Lira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="05 de Abril de 2023 às 14:30h" dateTime="2023-04-05 14:30:00">Publicado há 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>Fala, Gabriel. 👍 Beleza?</p> 
        <p>Acabei de subir a última alteração do meu primeiro projeto em ReactJs. 🚀</p>
        <p>👨‍💻 Desenvolvi ele durante a trilha Ignite ReacJs, da Rocketseat.</p>
        <p>Depois me dá um feedback?</p>
        <p>😄👍</p>
      </div>

    </article>
  );
}