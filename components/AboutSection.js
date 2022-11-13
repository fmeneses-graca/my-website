import Image from 'next/image'
import profilePic from '../public/me.jpg'
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import Link from 'next/link'

export default function AboutSection() {
    return (
        <div id="about" className="section-container">
            <h1>Hello, I&apos;m Felipe!</h1>

            <div className="flex justify-center py-10">
                <Image className="w-60 h-60 rounded-full shadow-xl shadow-black" src={profilePic} alt="Picture of the Felipe" />
            </div>

            <p className="md:w-2/3 md:mx-auto">
                I&apos;m a full-stack developer focused on building useful and attractive web applications.
                I&apos;m particularly inspired by the idea of developing aesthetically appealing web applications
                that can solve real-life problems to help individuals and organizations achieve their goals.
                <br /><br />
                My strengths in the programming field gravitate around JavaScript full-stack technologies,
                such as MongoDB, Express.js, React, and Node.js (the MERN stack). Additionally, my day-to-day toolkit
                includes the following technologies: Next.js, TailwindCSS, Git, GitHub, Vercel, and Visual Studio Code.
            </p>

            <div className="flex-container pt-10 w-1/3 mx-auto">
                <Link className="icon -z-10" href="https://www.linkedin.com/in/felipemenesesg/" target="_blank">
                    <IoLogoLinkedin size="28" />
                </Link>
                <Link className="icon -z-10" href="https://github.com/fmeneses-graca" target="_blank">
                    <IoLogoGithub size="28" />
                </Link>
            </div>

        </div>
    )
}