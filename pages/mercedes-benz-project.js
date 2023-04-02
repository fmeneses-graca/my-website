import Head from 'next/head'
import Image from 'next/image'
import step1 from '../public/mercedes/step1.png'
import step2 from '../public/mercedes/step2.png'
import step3 from '../public/mercedes/step3.png'
import step4 from '../public/mercedes/step4.png'
import step5 from '../public/mercedes/step5.png'
import step61 from '../public/mercedes/step61.png'
import step62 from '../public/mercedes/step62.png'
import step63 from '../public/mercedes/step63.png'
import step71 from '../public/mercedes/step71.png'
import step72 from '../public/mercedes/step72.png'
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
            <MBAProject />
        </>
    )
}

function MBAProject() {
    const router = useRouter()
    return (
        <div id="about" className="section-container">
            <div className="flex-col">
                <button className="icon group" type="button" onClick={() => router.back()}>
                    <IoArrowBackCircle size="40" />
                    <span className="navbar-tooltip group-hover:scale-100">
                        Go Back
                    </span>
                </button>

                <h1 className="md:w-1/2 mx-auto">
                    Data Analytics Project - Mercedes-Benz Trucks
                </h1>

                <iframe className="mx-auto" title="Report Section" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiNTc2ZjdmOWMtMWFlYi00MDYzLThlOWEtMzAwM2Y1ZDY3MjY1IiwidCI6ImZkYzkzMDZkLTljNDctNDc3Ni04YzEyLTI2YTc0ZDYwZGEzNyJ9" frameborder="0" allowFullScreen="true"></iframe>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Summary:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    Mercedes-Benz Trucks Brazil challenged my MBA team to develop a data monetization strategy for the data collected from their trucks and buses.
                </p>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Process:</h2>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 1. Exploration.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I explored a sample of the database provided by the client, Mercedes-Benz Trucks and found that the data contained useful information 
                    about vehicle position (date, hour, minute, longitude, latitude),
                    vehicle performance (fuel consumption, break usage, speed, moving time, stop time), and vehicle maintenance (type of service,
                    service unit, priority) related to tours made by trucks and buses in Brazilian roads.
                </p>
                <Image src={step1} alt="Excel spreadsheet" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 2. Brainstorming and ideation.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I proposed the idea to develop a Power BI dashboard where Mercedes-Benz Trucks could provide road contractors and public transportation
                    agencies with insights about how the road infrastructure impacts truck performance to optimize construction investments.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 3. Market research.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I conducted research about roads infrastructure to better understand the needs
                    and pain points that road contractors and public transportation agencies faced when making decisions about construction investments.
                    The research showed that the “geometric design of roads” and the “condition of the road surface” were the major problems.
                </p>
                <Image src={step3} alt="Report" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 4. Value Proposition Canvas.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I used the Value Proposition Canvas to determine how the Mercedes-Benz Trucks data solution could provide gain creators,
                    and pain relievers to road contractors and agencies considering their processes, pain points, and gain opportunities.
                </p>
                <Image src={step4} alt="Value Proposition Canvas" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 5. Business Model Canvas.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I provided an overview of the key aspects of the solution using the Business Model Canvas.
                </p>
                <Image src={step5} alt="Business Model Canvas" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 6. Prototyping.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    My teammates developed a prototype of the website showing a feed on the first page, subscription plans on
                    the second page, and a data analytics dashboard on the third page.
                </p>
                <Image src={step61} alt="Website prototype homepage" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                <Image src={step62} alt="Website prototype subscription plans" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                <Image src={step2} alt="Excel spreadsheet" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 7. Presentation.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    We used PowerPoint to build an appealing presentation using data, images, and the prototype to convince Mercedes-Benz
                    that we had developed the best solution to drive data monetization.
                </p>
                <Image src={step71} alt="Presentation slides" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                <Image src={step72} alt="Presentation video" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Skills developed:</h2>
                <div className="md:w-1/2 md:mx-auto">
                    <p>To sum up, during this project I developed the following skills:</p>
                    <br />
                    <ul className="pl-4 list-disc">
                        <li>Data Analysis</li>
                        <li>Power BI</li>
                        <li>Brainstorming</li>
                        <li>Market Research</li>
                        <li>Value Proposition Canvas</li>
                        <li>Business Model Canvas</li>
                        <li>Presentation</li>
                    </ul>
                </div>

                <button className="icon group" type="button" onClick={() => router.back()}>
                    <IoArrowBackCircle size="40" />
                    <span className="navbar-tooltip group-hover:scale-100">
                        Go Back
                    </span>
                </button>
                <br />
            </div>
        </div>
    )
}