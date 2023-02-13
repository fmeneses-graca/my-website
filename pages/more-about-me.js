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
                <h1>More Aboute Felipe</h1>

                <p className="md:w-1/2 mx-auto">
                I started my career as a researcher in Brazil, where I learned how to analyze data using rigorous standards to produce scientific findings, reports, and publications for legal and social sciences journals at UniCEUB&apos;s law school.
                    <br /><br />
                    After three years as a researcher, I was invited to work as a business intelligence analyst at a professional association, where I conducted data analysis to provide insights for senior-level executives and support strategic decisions. During this period, I also studied towards an MBA in Information Technology at FIAP.
                    <br /><br />
                    After two years, in 2020, I moved to Canada to study Computer Programming at Seneca College. I graduated in December 2022, and I am currently seeking an opportunity to join a team and continue providing meaningful insights through data analysis. 
                </p>

                <h1>Experience</h1>

                <div className="flex-container">
                    <Card style="card-size-large" text={workText()} />
                    <Card style="card-size-large" text={educationText()} />
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

function workText() {
    return (
        <>
            <h2 className="pt-0">Work</h2>

            <h3 className="my-0">Business Intelligence Analyst</h3>
            <p>
                OAB Federal Council, Brazil<br />
                May 2019 - Jun 2021 (2 yrs 2 mos)<br />
                {/* <ul className="pl-4 list-disc">
                    <li></li>
                </ul> */}
            </p>
            <br />

            <h3 className="my-0">Researcher</h3>
            <p>
                University Center of Brasilia, Brazil<br />
                Aug 2015 - Jan 2019 (3 yrs 6 mos)<br />
                {/* <ul className="pl-4 list-disc">
                    <li></li>
                </ul> */}
            </p>
            <br />
        </>
    )
}

function educationText() {
    return (
        <>
            <h2 className="pt-0">Education</h2>

            <h3 className="my-0">Computer Programming Diploma</h3>
            <p>
                2022 | Seneca College, Canada<br />
            </p>
            <br />

            <h3 className="my-0">MBA in Information Technology</h3>
            <p>
                2020 | FIAP, Brazil<br />
            </p>
            <br />

            <h3 className="my-0">Bachelor of Laws</h3>
            <p>
                2018 | University Center of Brasilia, Brazil<br />
            </p>
            <br />
        </>
    )
}