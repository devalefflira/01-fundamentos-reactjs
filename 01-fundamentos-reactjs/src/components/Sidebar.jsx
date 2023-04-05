import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import perfil from '../assets/perfil.jpeg';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={styles.profile}>
        <img className={styles.avatar} src={perfil}/>
        <strong>Áleff Lira</strong>
        <span>Web Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>

  );
}