import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}) {
    
    function handleDeleteComment () {
        console.log('delete')
        onDeleteComment(content)
        
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/rvbonfimm.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rogério V. Bonfim</strong>
                            <time title='22 de setembro de 2022 às 09:16'dateTime='2022-09-22 09:16:00'>
                                Publicado há 1h
                            </time>
                        </div>
                        {/** BOTÃO DELETE */}
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash />
                        </button>
                    </header>    
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/> 
                        Aplaudir <span> 24</span>    
                    </button>
                </footer>
            </div>
        </div>
    )
}