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
                    <Card style="card-size-large" title="MET Museum Explorer - Web Development" text={metProjectText()} />
                    <Card style="card-size-large" title="Data Analysis and Competitive Intelligence - Presentation" text={presentationText()} />
                    <Card style="card-size-large" title="A Network Supreme Court - Data Analysis Research" text={courtProjectText()} />
                </div>

            </div>
        </div>
    )
}

function metProjectText() {
    return (
        <>
            <p className="pt-1">
                In this college project, I developed a full-stack web application that allows users to explore artworks from The Metropolitan Museum of Art - MET Museum database.
                The website fetches data from the MET Museum&apos;s publicly available API and organizes data so users can register
                and log in safely, search for artworks using multiple criteria, view their search history, and save their favorite artworks.
            </p>

            <div className="flex">
                <Link href="/met-museum-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip bottom-0 left-14 scale-100">
                            Explore the project
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}

function mercedesProjectText() {
    return (
        <>
            <p className="pt-1">
                In this MBA project, I designed a Business Intelligence solution for Mercedes-Benz Trucks to drive data monetization.
                The solution consists of a website that provides road contractors and public transportation agencies with insights about
                road infrastructure to optimize construction investments.
            </p>

            <div className="flex">
                <Link href="/mercedes-benz-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip bottom-0 left-14 scale-100">
                            Explore the project
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}

function presentationText() {
    return (
        <>
            <p className="pt-1">
                During my MBA, I was invited by a post-graduate research group to give a lecture about any Data Analysis-related
                topic of my choosing. I designed and delivered a presentation about Data Analysis and Competitive Intelligence,
                including data analysis processes and techniques, analytics maturity models, logical data architecture, big data,
                and data management.
            </p>

            <div className="flex">
                <Link href="/presentation-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip bottom-0 left-14 scale-100">
                            View the presentation
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
                In this LLB project, I conducted a data analysis that examined +200 cases according to models of judicial behaviour
                on how international and foreign precedents affected the Brazilian Supreme Court&apos;s rulings.
            </p>

            <div className="flex">
                <Link href="/supreme-court-network-project" passHref>
                    <button className="icon group">
                        <IoArrowForwardCircle size="40" />
                        <span className="navbar-tooltip bottom-0 left-14 scale-100">
                            Explore the research
                        </span>
                    </button>
                </Link>
            </div>
        </>
    )
}