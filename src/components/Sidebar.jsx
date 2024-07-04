import { PencilLine } from 'phosphor-react'
import styles from "./Sidebar.module.css";
import { Avatar } from './Avatar';
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover} src="https://images.unsplash.com/photo-1566837945700-30057527ade0?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/developer-vitoria-luiza.png" />
        <strong>Vitória Luiza</strong>
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
