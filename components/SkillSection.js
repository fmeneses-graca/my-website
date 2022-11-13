import SkillElement from "./SkillElement";

export default function Skills() {
    return (
        <div id="skills" className="section-container">
            <h1>My Developer Skills</h1>

            <div className="flex-container md:w-3/5">
                <SkillElement text="JavaScript" />
                <SkillElement text="React" />
                <SkillElement text="Next.js" />
                <SkillElement text="HTML" />
                <SkillElement text="CSS" />
                <SkillElement text="TailwindCSS" />
                <SkillElement text="Bootstrap" />
                <SkillElement text="APIs" />
                <SkillElement text="Express.js" />
                <SkillElement text="Node.js" />
                <SkillElement text="NoSQL" />
                <SkillElement text="SQL" />
                <SkillElement text="MongoDB" />
                <SkillElement text="Mongoose" />
                <SkillElement text="PostgreSQL" />
                <SkillElement text="Vercel" />
                <SkillElement text="Heroku" />
                <SkillElement text="Cyclic" />
                <SkillElement text="Git" />
                <SkillElement text="GitHub" />
                <SkillElement text="Visual Studio Code" />
            </div>
        </div>
    )
}