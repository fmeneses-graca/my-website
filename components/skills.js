export default function Skills() {
    return (
        <div className="flex-col justify-items-center py-10 px-4">

            <h2 className="flex justify-center py-5 px-4 text-4xl font-roboto font-black text-white">My Developer Skills</h2>

            <div className="flex flex-wrap py-10 px-4 justify-between">
                <SkillElement text="JavaScript" />
                <SkillElement text="React" />
                <SkillElement text="Next.js" />
                <SkillElement text="TailwindCSS" />
                <SkillElement text="Bootstrap" />
                <SkillElement text="CSS" />
                <SkillElement text="REST APIs" />
                <SkillElement text="Express.js" />
                <SkillElement text="Node.js" />
                <SkillElement text="MongoDB" />
                <SkillElement text="PostgreSQL" />
                <SkillElement text="Git" />
                <SkillElement text="GitHub" />
                <SkillElement text="Visual Studio Code" />
            </div>

        </div>
    )
}

function SkillElement({ text }) {
    return (
        <div className="px-5 py-2 m-4 bg-secondary rounded text-2xl font-roboto text-white shadow-lg shadow-black">
            {text}
        </div>
    )
}