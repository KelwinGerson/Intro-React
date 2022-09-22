import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            {/** CABEÇALHO */}
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/83376362?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Kelwin Gerson</strong>
                        <span> Analista de Sistemas</span>
                    </div>
                </div>
                <time title='22 de setembro de 2022 às 09:16'dateTime='2022-09-22 09:16:00'>
                    Publicado há 1h
                </time>
            </header>
            {/** CONTEÚDO DO POST */}

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">kelwin.dev/projetos</a></p>
                <p>
                    <a href="">#newproject</a>{' '}
                    <a href="">#nwl</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
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
        </article>
    )
}