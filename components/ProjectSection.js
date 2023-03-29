import Card from "./card"
import Link from 'next/link'
import Image from 'next/image'
import { IoArrowForwardCircle } from "react-icons/io5"
import userFavouritesPage from '../public/met/userFavouritesPage.png'
import step2 from '../public/mercedes/step2.png'
import presentation from '../public/presentation/presentation.png'
import frontPage from '../public/court/frontPage.png'

export default function ProjectSection() {
    return (
        <div id="projects" className="section-container">
            <div className="flex-col mx-auto">
                <h2>Projects</h2>

                <div className="flex-container py-4">
                    <Card style="card-size-large" title="Data Analytics Project - Mercedes-Benz Trucks" text={mercedesProjectText()} />
                    <Card style="card-size-large" title="Data Analysis Research - UniCEUB" text={courtProjectText()} />
                    <Card style="card-size-large" title="Data Analysis and Competitive Intelligence" text={presentationText()} />
                    <Card style="card-size-large" title="Website - MET Museum API Explorer" text={metProjectText()} />
                </div>

            </div>
        </div>
    )
}

function metProjectText() {
    return (
        <>
            <p className="pt-1">
                Full-stack web application that pulls data from the MET Museum API and allows users to explore artworks.
            </p>

            <Image src={userFavouritesPage} alt="User Favourites page" className="pt-4" />

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
            Power BI dashboard that generates insight into how road infrastructure impacts vehicle performance.
            </p>

            <Image src={step2} alt="Excel spreadsheet" className="pt-4" />

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
                Presentation about data analysis processes and techniques, analytics maturity models, logical data architecture, big data, and data management.
            </p>

            <Image src={presentation} alt="Presentation" layout='fill' className="pt-4" />

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
                Research paper that explains how 349 foreign precedents affected 224 court decisions.
            </p>

            <Image src={frontPage} alt="Graphic" layout='fill' className="pt-4" />

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