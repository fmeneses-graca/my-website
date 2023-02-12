import Card from "./card"
import Link from 'next/link'
import { IoArrowForwardCircle } from "react-icons/io5"

export default function ProjectSection() {
    return (
        <div id="projects" className="section-container">
            <div className="flex-col mx-auto">
                <h1>Projects</h1>

                <div className="flex-container">
                    <Card style="card-size-large" title="Mercedes-Benz Trucks - Data Analytics Solution" text={mercedesProjectText()} />
                    <Card style="card-size-large" title="A Network Supreme Court - Data Analysis Research" text={courtProjectText()} />
                </div>

            </div>
        </div>
    )
}

function mercedesProjectText() {
    return (
        <>
            <p className="pt-1">
                In this MBA project, I created a Business Intelligence solution for Mercedes-Benz Trucks to drive data monetization.
                The solution consists of a website that provides road contractors and public transportation agencies with insights about
                road infrastructure to optimize construction investments.
            </p>

            <div className="flex">
                <Link href="/mercedes-benz-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip scale-100">
                            Explore the project
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}

function courtProjectText() {
    return (
        <>
            <p className="pt-1">
                In this LL.B. project, I published a quantitative analysis that examined +200 cases according
                to models of judicial behaviour on how international and foreign precedents affected the Brazilian Supreme Court&apos;s rulings.
            </p>

            <div className="flex">
                <Link href="/supreme-court-network-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip scale-100">
                            Explore the project
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}