import Image from 'next/image'
import pptFramework from '../public/PPT Framework.png'
import Link from 'next/link'
import { IoArrowForwardCircle } from "react-icons/io5"

export default function AboutSection() {
    return (
        <div id="about" className="section-container">
            <div className="flex-col">
                <h1 className="mx-auto">
                    Nice to meet you, I&apos;m Felipe!
                </h1>

                <Image src={pptFramework} alt="People Process Technology Framework" width='400' className="mx-auto my-3" />

                <p className="md:w-1/2 md:mx-auto">
                    I&apos;m a Business and Data Analyst with a passion for working at the intersection of people, processes, and technology.
                    I help organizations reach their goals by making these three elements work together toward shared objectives using visual and analytical tools.
                    I have more than five years of experience analyzing data and designing solutions that make a lasting impact on stakeholders.
                </p>

                <br />

                <div className="md:w-1/2 md:mx-auto">
                    <div className="flex">
                        <Link href="/more-about-me" passHref>
                            <button className="icon group">
                                <IoArrowForwardCircle size="40" />
                                <span className="navbar-tooltip bottom-0 left-14 scale-100">
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