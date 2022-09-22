// props be take all props of Post in App.jsx
export function Post(props) {
    return (
        <div>
        <strong className="text-white">{props.author}</strong>
        <h1>{props.content}</h1>
        </div>
    )
}

