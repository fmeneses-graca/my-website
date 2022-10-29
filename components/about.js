import Image from 'next/image'
import profilePic from '../public/me.jpg'

export default function About() {
    return (
        <div className="flex-col justify-items-center py-10 px-4">

            <h1 className="flex justify-center py-5 text-6xl font-roboto font-black text-white">
                Hello, I&apos;m Felipe!
            </h1>

            <div className="flex justify-center py-5">
                <Image className="w-60 h-60 rounded-full shadow-xl shadow-black" src={profilePic} alt="Picture of the Felipe" />
            </div>

            <p className="text-2xl py-5 px-4 font-roboto text-white">
                I&apos;m a full-stack developer focused on building functional and valuable web applications.
                I&apos;m greatly inspired by the idea of developing web applications that can solve real-life problems and help businesses achieve their goals.
                My strengths in programming gravitate around JavaScript full stack technologies, such as MongoDB, Express.js, React, and Node.js (the MERN stack).
            </p>

        </div>
    )
}