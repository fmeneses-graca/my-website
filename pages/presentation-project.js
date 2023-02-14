import Head from 'next/head'
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
                <h1>Data Analysis and Competitive Intelligence - Presentation</h1>
                <iframe className="w-auto md:w-2/3 mx-auto" src="https://docs.google.com/presentation/d/e/2PACX-1vS-2Onk-uFOjgPkRq_jbDqzidgAKaZucHxVBAvm_6g6xsrN-0ApSscfWGQzVeAtY_MBna4TP8LbOHyH/embed?start=true&loop=true&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <br />
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