export default function Card({ style, title, text = "" }) {
    return (
        <div className={"card " + style}>
            <h3>{title}</h3>
            {text}
        </div>
    )
}