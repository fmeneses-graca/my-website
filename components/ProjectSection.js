import { IoOpen } from "react-icons/io5"
import Card from "./card"
import Link from 'next/link'

export default function ProjectSection() {
    return (
        <div id="projects" className="section-container">
            <div className="flex-col mx-auto">
                <h1>Projects</h1>

                <div className="flex-container">
                    <Card style="medium-card" title="Mercedes-Benz Trucks Data Analytics Solution" text={mercedesProjectText()} />
                </div>

            </div>
        </div>
    )
}

function mercedesProjectText() {
    return (
        <>
            <p className="pt-4">
                In this MBA project, I created a Business Intelligence solution for Mercedes-Benz Trucks to drive data monetization.
                The solution consists of a website that provides road contractors and public transportation agencies with insights about
                road infrastructure to optimize construction investments.
            </p>

            <div className="flex">
                <Link href="/mercedes-benz-project" passHref>
                    <button className="icon group">
                        <IoOpen size="28" />
                    </button>
                </Link>
            </div>

        </>
    )
}