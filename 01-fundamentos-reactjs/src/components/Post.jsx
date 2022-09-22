import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.article}>
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

            <div className={styles.content}>
                <p>Fala galeraa 👋 </p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <a href="#">
                    <p>👉 jane.design/doctorcare</p>
                </a>
                <a href="#">
                    <p>#novoprojeto #nlw #rocketseat</p>
                </a>
            </div>
        </article>
    )
}