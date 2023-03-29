import Head from 'next/head';
import Image from 'next/image'
import step3 from '../public/court/step3.png'
import finding1 from '../public/court/finding1.png'
import finding2 from '../public/court/finding2.png'
import finding3 from '../public/court/finding3.png'
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
            <LLBProject />
        </>
    )
}

function LLBProject() {
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
                Data Analysis Research - UniCEUB
                </h1>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Summary:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    {/* This project was developed in 2019, my final year of law school at UniCEUB (Brazil),
                    while I was a member of the research group “Constitutional Courts and Democracy.”
                    The group specialized in employing empirical research methodologies to explain the decision process of Constitutional Courts. */}
                    <br />
                    <br />
                    In this project, I partnered with a professor to define a quantitative analysis methodology, collect and analyze data,
                    and communicate the final results of the empirical study section of the article “A network Supreme Court?
                    How, when, and with which level of argumentative engagement does the Brazilian Supreme Court deal with foreign precedents?”
                </p>

                {/* <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Article Abstract:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    The article aims to examine how the Brazilian Supreme Court (“Brazilian Court” or “the Court”) deals with the permeability
                    between domestic Constitutional Law, Comparative Constitutional Law and International human rights Law. It seeks to assess
                    whether the Brazilian Court operates in a kind of “network environment,” with dialogue and interaction with other constitutional,
                    supreme and international courts or not. With this purpose, the work starts from theoretical elaborations on models of judicial
                    behaviour related to the operation with foreign precedents and, based on such models, develops an empirical study that analyzes:
                    (i) if the Brazilian Court uses foreign precedents in its decision-making process; (ii) which are the main foreign or international
                    courts whose precedents are referenced by the Court; (iii) how deep is the Court&apos;s reasoning based on these precedents.
                </p> */}

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Process:</h2>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 1. Scope definition.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    First, we discussed which types of cases would be considered relevant to the study by separating the relatively simple cases
                    - the ones that represented a significant volume of cases decided in virtual sessions through the mere reiteration of previous
                    decisions - from the complex, high-visibility cases, which corresponded to the most sophisticated decisions and which tend to
                    be discussed in physical sessions subject to live television. We also established that the study would only consider complex
                    cases with a final decision between 2013 and 2018 to reflect the current composition and behaviour of the Court.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 2. Data Collection - Identifying Relevant Cases</h3>
                <p className="md:w-1/2 md:mx-auto">
                    We explored annual retrospectives published by the Court, lawyers, and professors to identify which cases were considered
                    relevant by those stakeholders from 2013 to 2018. After analyzing 24 annual retrospectives, we built a database containing
                    224 relevant cases. However, only 145 cases had a final decision that could be downloaded from the Court&apos;s website and thoroughly analyzed.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 3. Dictionary-Based Text Analysis - Extracting Foreign Precedents References from Relevant Cases.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    To identify references to foreign and international precedents in those 145 decisions we had downloaded, we created a dictionary
                    of searchable terms consisting of the names of all countries and international courts (including name variations). We searched
                    for all the words in the list using the advanced search option provided by Adobe Acrobat software to read from multiple pdf files
                    and formed a database with 349 references to foreign and international precedents.
                </p>
                <Image src={step3} alt="Excel spreadsheet" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 4. Cluster Analysis - Qualitative Analysis of Reasoning Depth.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    Finally, we performed a cluster analysis to group the references to foreign and international precedents into four categories
                    based on how deep the Court&apos;s reasoning is based on these precedents.
                </p>
                <br />

                <table className="md:w-1/2 md:mx-auto table-auto border border-secondary">
                    <thead>
                        <tr>
                            <th>Reasoning Depth</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Level 1</td>
                            <td>(i) Citation of foreign precedent and ratio decidendi</td>
                        </tr>
                        <tr>
                            <td>Level 2</td>
                            <td>
                                (i) Elements of Level 1; and <br />
                                (ii) Identification of relevant facts and grounds; OR <br />
                                (ii) Comparison between the foreign precedent and the case under examination.
                            </td>
                        </tr>
                        <tr>
                            <td>Level 3</td>
                            <td>
                                (i) Elements of Level 1; and <br />
                                (ii) Identification of relevant facts and/or grounds; AND <br />
                                (iii) Comparison between the foreign precedent and the case under examination.
                            </td>
                        </tr>
                        <tr>
                            <td>Level 4</td>
                            <td>
                                (i) Elements of Levels 1, 2 and 3; and <br />
                                (ii) Identification of the political, social, economic and/or legal context in which the precedent was produced.
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Findings:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    1. Numbers indicate a trend towards a quantitative increase in citations to foreign precedents, although this
                    does not necessarily imply a more significant argumentative benefit.
                </p>
                <Image src={finding1} alt="Graphic" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <p className="md:w-1/2 md:mx-auto">
                    2. The Supreme Court of the United States was the most cited court, with 131 precedents.
                    The Federal Constitutional Court of Germany was the second most mentioned court, with 55 references.
                    The precedents produced by the Inter-American System of Human Rights (combined Court and Commission) were in third place,
                    with 54 citations. The European Court of Human Rights ranked fourth, with 52 citations. The Constitutional Court of Spain
                    ranked fifth, with 19 references; the Constitutional Court of Colombia, in sixth place, with 17 references; and the Constitutional
                    Court of Portugal received nine references. Other international and national courts were also mentioned, with smaller numbers.
                </p>
                <Image src={finding2} alt="Graphic" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <p className="md:w-1/2 md:mx-auto">
                    3. Although the number of citations to precedents has increased over time, the depth of arguments developed by the Court
                    based on foreign precedents is predominantly low. The cluster analysis ranked 271 citations with Level 1 (78%), which
                    corresponds to the lowest level of reasoning depth. The investigation also resulted in 26 citations with Level 2 (7%),
                    27 citations with Level 3 (8%), and 25 citations with Level 4 (7%).
                </p>
                <Image src={finding3} alt="Graphic" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />

                <div className="md:w-1/2 md:mx-auto">
                    <a href="https://www.publicacoesacademicas.uniceub.br/rdi/article/download/6614/pdf" target="_blank" rel="noopener noreferrer">
                        Check the full article here (Portuguese only).
                    </a>
                </div>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Skills developed:</h2>
                <div className="md:w-1/2 md:mx-auto">
                    <p>To sum up, during this project I developed the following skills:</p>
                    <br />
                    <ul className="pl-4 list-disc">
                        <li>Data Collection</li>
                        <li>Data Analysis</li>
                        <li>Data Visualization</li>
                        <li>Empirical Research Methodology</li>
                        <li>Quantitative Analysis</li>
                        <li>Microsoft Excel</li>
                        <li>Cluster Analysis</li>
                        <li>Dictionary-Based Text Analysis</li>
                        <li>Written communication</li>
                        <li>Adobe Acrobat Advanced Search</li>
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