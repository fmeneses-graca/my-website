export default function Card({  style, image = "", imageAlt = "", title, text = "" }) {
    return (
        <div className={style}>
            <h3>{title}</h3>
            {text}
        </div>
    )
}