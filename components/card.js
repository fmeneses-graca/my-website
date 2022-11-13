export default function Card({  style, title, text = "" }) {
    return (
        <div className={style}>
            <h3>{title}</h3>
            {text}
        </div>
    )
}