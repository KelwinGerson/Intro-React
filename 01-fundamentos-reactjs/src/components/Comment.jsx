import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/83376362?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Ana Caroline</strong>
                            <time title='22 de setembro de 2022 às 09:16'dateTime='2022-09-22 09:16:00'>
                                Publicado há 1h
                            </time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash />
                        </button>
                    </header>    
                    <p>Muito bom Kelwin, você é o cara!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span>20</span>    
                    </button>
                </footer>
            </div>
        </div>
    )
}