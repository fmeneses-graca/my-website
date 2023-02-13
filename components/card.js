export default function Card({ style, title = "", text = "" }) {
    return (
        <div className={"card " + style}>
            <h3 className="my-0">{title}</h3>
            {text}
        </div>
    )
}