import Link from 'next/link'
import { IoArrowForwardCircle } from "react-icons/io5"

export default function AboutSection() {
    return (
        <div id="about" className="section-container">
            <div className="flex-col">
                <h1 className="mx-auto">
                    Nice to meet you, I&apos;m Felipe!
                </h1>

                <div className="md:w-1/2 md:mx-auto">
                    <p>I have more than 5 years of experience analyzing data and providing meaningful insights to help stakeholders make informed decisions. That means:</p>
                    <br />

                    <ul className="pl-4 list-disc">
                        <li>Collecting, modelling, and visualizing data using Excel, Power BI, and programming languages (SQL, Python, and JavaScript);</li>
                        <li>Maintaining documentation, writing reports, and delivering presentations to explain data analysis processes and findings;</li>
                        <li>Understanding how to work with Data Structures, Databases, Data Warehousing, Big Data, Web Applications and Cloud Computing;</li>
                        <li>Communicating with cross-functional teams using Agile techniques (Scrum, Kanban, Trello, Jira) to identify data needs and design solutions.</li>
                    </ul>

                    <br />

                    <div className="flex">
                        <Link href="/more-about-me" passHref>
                            <button className="icon group">
                                <IoArrowForwardCircle size="40" />
                                <span className="navbar-tooltip scale-100">
                                    More About Me
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}