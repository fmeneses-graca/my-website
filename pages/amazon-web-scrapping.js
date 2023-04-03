import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoArrowBackCircle } from "react-icons/io5"
import step1 from '../public/amazon/step1.png'
import step2 from '../public/amazon/step2.png'
import step3 from '../public/amazon/step3.png'
import step4 from '../public/amazon/step4.png'
import step5 from '../public/amazon/step5.png'
import step6 from '../public/amazon/step6.png'

export default function Home() {
    return (
        <>
            <Head>
                <title>Felipe Graca</title>
                <link rel='icon' href='/favicon.ico' />
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <AmazonProject />
        </>
    )
}

function AmazonProject() {
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

                <div className="md:w-1/2 mx-auto">
                    <h1>Web Scraping - Amazon Product Page</h1>
                    <p className="text-center">Extracting data from a webpage using Python (BeautifulSoup) to generate a CSV file</p>
                    <br />
                </div>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 1. Import libraries</h3>
                <Image src={step1} alt="Step 1" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                
                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 2. Connect to website</h3>
                <Image src={step2} alt="Step 2" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                
                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 3. Clean data</h3>
                <Image src={step3} alt="Step 3" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                
                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 4. Create timestamp to indicate when data was scraped</h3>
                <Image src={step4} alt="Step 4" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                
                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 5. Create CSV file</h3>
                <Image src={step5} alt="Step 5" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />
                
                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 6. Visualize data with pandas</h3>
                <Image src={step6} alt="Step 6" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <br />


                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Skills developed:</h2>
                <div className="md:w-1/2 md:mx-auto">
                    <p>To sum up, during this project I developed the following skills:</p>
                    <br />
                    <ul className="pl-4 list-disc">
                        <li>Web Scrapping</li>
                        <li>Python</li>
                        <li>BeautifulSoup</li>
                        <li>Pandas</li>
                    </ul>
                    <br />
                    <p>Special thanks for Alex Freberg for providing a walkthrough for this project!</p>
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