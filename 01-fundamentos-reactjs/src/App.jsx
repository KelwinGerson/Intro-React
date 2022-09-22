import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'
import './global.css';


export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}> 
        <Sidebar />
        <main>
          <Post
            author="Kelwin"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam cumque iure fugiat earum fuga, rerum tempora vel maxime exercitationem deleniti et. Neque nulla in distinctio esse aspernatur incidunt odit."
          />
          <Post
            author="Ana"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam cumque iure fugiat earum fuga, rerum tempora vel maxime exercitationem deleniti et. Neque nulla in distinctio esse aspernatur incidunt odit."
          />
        </main>
      </div>
    </div>
  )
}

