export default function Card({ title, text = "" }) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}