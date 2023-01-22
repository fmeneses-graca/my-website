import Image from 'next/image'
import pptFramework from '../public/PPT Framework.png'

export default function AboutSection() {
    return (
        <div id="about" className="section-container">
            <div className="flex-col">
                <h1 className="mx-auto">
                    Hey there, I&apos;m Felipe!
                </h1>

                <Image src={pptFramework} alt="People Process Technology Framework" width='400' className="mx-auto my-3"/>

                <p className="md:w-2/3 md:mx-auto">
                    I&apos;m a Business Analyst passionate about working at the intersection of people, processes, and technology. I use an analytical approach to make these three elements work together toward shared objectives and help organizations reach their goals.
                </p>
            </div>
        </div>
    )
}