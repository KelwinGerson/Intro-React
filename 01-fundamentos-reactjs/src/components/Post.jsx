import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react';


export function Post({ author, publishedAt, content}) {
    // comments
    const [comments, setComments ] = useState([
        'Kelwin Rich'
    ])

    const [newCommentText, setNewCommentText] = useState('')
    
    // libray date-fns format can join string with date differentiating with cotes simples e compost
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        // prefixo: 'há cerca de'
        addSuffix: true
        }
    )

    function handleCreateNewComment () {
        // for don't redirect page when submit
        event.preventDefault()
        // Spread syntax (...)
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange (comment) {
        setNewCommentText(event.target.value)
    }

    function deleteComment (comment) {
        console.log(`Delete comment ${comment}`)
    }

    return (
        <article className={styles.post}>
            {/** CABEÇALHO */}
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            {/** CONTEÚDO DO POST */}
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            {/** COMENTÁRIOS */}
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='comment'
                    placeholder='Deixe um comentário...'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                {/** BOTÃO */}
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}