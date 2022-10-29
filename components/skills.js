export default function Skills() {
    return (
        <section className="section-container">
            <h1>My Developer Skills</h1>

            <div className="flex-container py-10 md:w-2/3 md:mx-auto">
                <SkillElement text="JavaScript" />
                <SkillElement text="React" />
                <SkillElement text="Next.js" />
                <SkillElement text="HTML" />
                <SkillElement text="CSS" />
                <SkillElement text="TailwindCSS" />
                <SkillElement text="Bootstrap" />
                <SkillElement text="REST APIs" />
                <SkillElement text="Express.js" />
                <SkillElement text="Node.js" />
                <SkillElement text="SQL" />
                <SkillElement text="MongoDB" />
                <SkillElement text="PostgreSQL" />
                <SkillElement text="Vercel" />
                <SkillElement text="Heroku" />
                <SkillElement text="Cyclic" />
                <SkillElement text="Git" />
                <SkillElement text="GitHub" />
                <SkillElement text="Visual Studio Code" />
            </div>
        </section>
    )
}

function SkillElement({ text }) {
    return (
        <div className="skill-element">
            <p>{text}</p>
        </div>
    )
}