import Head from 'next/head'
import Card from "../components/card"
import { useRouter } from 'next/router'
import { IoArrowBackCircle } from "react-icons/io5"

export default function Home() {
    return (
        <>
            <Head>
                <title>Felipe Graca</title>
                <link rel='icon' href='/favicon.ico' />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <ExperienceSection />
        </>
    )
}

function ExperienceSection() {
    const router = useRouter()
    return (
        <div id="experience" className="section-container">
            <button className="icon group" type="button" onClick={() => router.back()}>
                <IoArrowBackCircle size="40" />
                <span className="navbar-tooltip group-hover:scale-100">
                    Go Back
                </span>
            </button>

            <div className="flex-col mx-auto">
                <h1>More About Felipe</h1>
                <p className="md:w-1/2 mx-auto">
                    I started my career as a researcher in Brazil, where I learned how to analyze data using rigorous standards to produce scientific findings, reports, and publications for legal and social sciences journals at UniCEUB&apos;s law school.
                    <br /><br />
                    After three years as a researcher, I was invited to work as a business analyst at a professional association, where I conducted data analysis to design solutions for senior-level executives and support strategic decisions. During this period, I also studied towards an MBA in Information Technology at FIAP.
                    <br /><br />
                    After two years, in 2020, I moved to Canada to study Computer Programming at Seneca College. I graduated in December 2022, and I am currently seeking an opportunity to join a friendly team and help them achieve their goals through data analysis and solution design.
                </p>
                <br />

                <h1>Skillset</h1>
                <ul className="md:w-1/2 mx-auto pl-4 list-disc">
                    <li>Conducting market and user research with quantitative and qualitative approaches to identify customer needs and elicit requirements.</li>
                    <li>Build and illustrate solution design and features using visual techniques (SWOT, Business Model Canvas, Prototyping, Process Modelling).</li>
                    <li>Collecting, modelling, and visualizing data and KPIs using Excel, Power BI, and programming languages (SQL, Python, and JavaScript).</li>
                    <li>Communicating with cross-functional teams using Agile techniques (Scrum, Kanban, Trello, Jira) to identify opportunities and troubleshoot issues.</li>
                    <li>Maintaining documentation, writing reports, and delivering presentations to explain data analysis findings and solution design.</li>
                    <li>Staying up to date with the latest trends and developments in the technology market, such as Web/Mobile Applications, UI/UX, Big Data, and Cloud Computing.</li>
                </ul>
                <br />

                <h1>Work Experience</h1>
                <div className="flex-container">
                    <Card style="card-size-large" title="Business Analyst" text={workOAB()} />
                    <Card style="card-size-large" title="Researcher" text={workUNICEUB()} />
                </div>

                <h1>Education</h1>
                <div className="flex-container">
                    <Card style="card-size-large" title="Computer Programming Diploma" text={educationSeneca()} />
                    <Card style="card-size-large" title="MBA in Information Technology" text={educationFIAP()} />
                    <Card style="card-size-large" title="Bachelor of Laws" text={educationUNICEUB()} />
                </div>
            </div>

            <button className="icon group" type="button" onClick={() => router.back()}>
                <IoArrowBackCircle size="40" />
                <span className="navbar-tooltip group-hover:scale-100">
                    Go Back
                </span>
            </button>
        </div>
    )
}

function workOAB() {
    return (
        <>
            <p>
                OAB Federal Council, Brazil<br />
                May 2019 - Jun 2021 (2 yrs 2 mos)<br />
                {/* <ul className="pl-4 list-disc">
                    <li></li>
                </ul> */}
            </p>
        </>
    )
}

function workUNICEUB() {
    return (
        <>
            <p>
                University Center of Brasilia, Brazil<br />
                Aug 2015 - Jan 2019 (3 yrs 6 mos)<br />
                {/* <ul className="pl-4 list-disc">
                    <li></li>
                </ul> */}
            </p>
        </>
    )
}

function educationSeneca() {
    return (
        <>
            <p>
                2022 | Seneca College, Canada<br />
            </p>
        </>
    )
}

function educationFIAP() {
    return (
        <>
            <p>
                2020 | FIAP, Brazil<br />
            </p>
        </>
    )
}

function educationUNICEUB() {
    return (
        <>
            <p>
                2018 | University Center of Brasilia, Brazil<br />
            </p>
        </>
    )
}