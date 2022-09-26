import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(props) {
    console.log(props)

    return (
        <article className={styles.post}>
            {/** CABEÇALHO */}
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src='https://github.com/igorhms.png' />
                    <div className={styles.authorInfo}>
                        <strong>Igor Silva</strong>
                        <span> Analista de Sistemas</span>
                    </div>
                </div>
                <time title='22 de setembro de 2022 às 09:16'dateTime='2022-09-22 09:16:00'>
                    Publicado há 1h
                </time>
            </header>
            {/** CONTEÚDO DO POST */}

            <div className={styles.content}>

            </div>

            {/** COMENTÁRIOS */}

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário...'
                />
            {/** BOTÃO */}
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}