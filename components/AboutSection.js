import Image from 'next/image'
import pptFramework from '../public/PPT Framework.png'
import Link from 'next/link'
import { IoArrowForwardCircle } from "react-icons/io5"
import HorizontalLine from "./HorizontalLine"

export default function AboutSection() {
    return (
        <div id="about" className="section-container">
            <div className="flex-col">
                <h1 className="mx-auto">
                    Felipe Meneses
                </h1>

                <HorizontalLine />
                {/* <Image src={pptFramework} alt="People Process Technology Framework" width='400' className="mx-auto my-3" /> */}

                <div className="md:w-1/2 md:mx-auto text-center mt-10">
                    <h3 className="my-0 pb-2">Data Analyst</h3>
                    <p className="pb-2">Excel | Power BI | SQL | Python | JavaScript</p>
                </div>

                {/* <div className="md:w-1/2 md:mx-auto">
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
                </div> */}
                <br />
            </div>
        </div>
    )
}