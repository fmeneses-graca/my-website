import projectMET from '../public/projectMET.png'
import moviesAPI from '../public/moviesAPI.png'
import moviesUI from '../public/moviesUI.png'
import Image from 'next/image'
import Card from "./card"
import SkillElement from "./skillElement"
import Link from 'next/link'

export default function Projects() {
    return (
        <div id="projects" className="section-container">
            <h1>My Projects</h1>

            <div className="flex-container">
                <Card style="large-card" title="The Met Art Collection User Interface" text={metUICardText()} />
                <Card style="large-card" title="Movies User Interface" text={moviesUICardText()} />
                <Card style="large-card" title="Movies API" text={moviesAPICardText()} />
            </div>
        </div>
    )
}

function metUICardText() {
    return (
        <>
            <Link href="https://senecacollege-web422-assignment4-met-museum.vercel.app/" target="_blank">
                <Image className="w-auto rounded" src={projectMET} alt="Picture of the MET" />
            </Link>
            <p className="pt-4">
                In this college project, I developed a user interface for searching and
                viewing data on the publicly available Metropolitan Museum of Art (the Met) Collection API.
            </p>
            <div className="flex-container py-4 w-auto">
                <SkillElement text="JavaScript" />
                <SkillElement text="React" />
                <SkillElement text="Next.js" />
                <SkillElement text="Bootstrap" />
                <SkillElement text="Node.js" />
            </div>
        </>
    )
}

function moviesUICardText() {
    return (
        <>
            <Link href="https://senecacollege-web422-assignment3-react.vercel.app/" target="_blank">
                <Image className="w-auto rounded" src={moviesUI} alt="Picture of the homepage of the project Movies UI" />
            </Link>
            <p className="pt-4">
                In this college project, I developed a user interface to view data provided by the Movies API developed in a previous project.
            </p>
            <div className="flex-container py-4 w-auto">
                <SkillElement text="JavaScript" />
                <SkillElement text="React" />
                <SkillElement text="Next.js" />
                <SkillElement text="Bootstrap" />
                <SkillElement text="Node.js" />
            </div>
        </>
    )
}

function moviesAPICardText() {
    return (
        <>
            <Link href="https://long-lime-seagull-toga.cyclic.app/api/movies/573a1391f29313caabcd956e" target="_blank">
                <Image className="w-auto rounded" src={moviesAPI} alt="Picture of the homepage of the project Movies API" />
            </Link>
            <p className="pt-4">
                In this college project, I developed an API using a sample data loaded in MongoDB Atlas (sample_mflix database).
                The API contains GET, POST, PUT, and DELETE routes to support CREATE, READ, UPDATE, and DELETE operations (CRUD).
            </p>
            <div className="flex-container py-4 w-auto">
                <SkillElement text="JavaScript" />
                <SkillElement text="APIs" />
                <SkillElement text="Express.js" />
                <SkillElement text="Node.js" />
                <SkillElement text="NoSQL" />
                <SkillElement text="MongoDB" />
                <SkillElement text="Mongoose" />
            </div>
        </>
    )
}