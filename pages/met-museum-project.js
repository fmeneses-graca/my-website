import Head from 'next/head'
import Image from 'next/image'
import homePage from '../public/met/homePage.png'
import advancedSearchPage from '../public/met/advancedSearchPage.png'
import searchResultsPage from '../public/met/searchResultsPage.png'
import artworkPage from '../public/met/artworkPage.png'
import userFavouritesPage from '../public/met/userFavouritesPage.png'
import userSearchHistoryPage from '../public/met/userSearchHistoryPage.png'
import userRegisterPage from '../public/met/userRegisterPage.png'
import userLoginPage from '../public/met/userLoginPage.png'
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
                Website - MET Museum API Explorer
                </h1>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Summary:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    I developed this project in 2022 while I was a Computer Programming student at Seneca College for the
                    “Web Programming for Apps and Services” course. The application was built using Next.js (a modern React framework)
                    and included the implementation of a user interface (UI) with React-Bootstrap; data fetching using SWR; shared state
                    components using Jotai; user authentication using JSON Web Tokens (JWT); user service API using Node.js, and Express.js;
                    and deployment using Vercel.
                    <br />
                    <a href="https://met-museum-art-collection-ui.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Check the application here.
                    </a>
                </p>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Process:</h2>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 1. User interface (UI) with React-Bootstrap</h3>
                <p className="md:w-1/2 md:mx-auto">
                    I started designing and developing the user interface from its basic components (navigation bar, artwork cards,
                    forms, buttons) to larger pages (home, advanced search, search results, artwork page, user register and log-in,
                    user history and favourites). Considering I still had the whole back end to implement, I used React-Bootstrap
                    components to build a plain user interface.
                </p>
                <br />

                <Image src={homePage} alt="Home page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">Home page</p>
                <br />

                <Image src={advancedSearchPage} alt="Advanced Search page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">Advanced Search page</p>
                <br />

                <Image src={searchResultsPage} alt="Search Results page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">Search Results page</p>
                <br />

                <Image src={artworkPage} alt="Artwork page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">Artwork page</p>
                <br />

                <Image src={userFavouritesPage} alt="User Favourites page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">User Favourites page</p>
                <br />

                <Image src={userSearchHistoryPage} alt="User Search History page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">User Search History page</p>
                <br />

                <Image src={userRegisterPage} alt="User Register page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">User Register page</p>
                <br />

                <Image src={userLoginPage} alt="User Login page" layout='fill' className="md:w-1/2 mx-auto my-3" />
                <p className="md:w-1/2 md:mx-auto">User Login page</p>
                <br />

                <p className="md:w-1/2 md:mx-auto">
                    Although Bootstrap critics might consider the pre-built designs raw and say that loading a large CSS file in your
                    web application can slow down performance, Bootstrap is still one of the fastest and most widely adopted CSS
                    frameworks for prototyping a responsive web UI. With that said, I am aware that using Tailwind CSS to control
                    the visual look of the components could make some room for improvements in the future.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 2. Data fetching using SWR.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    After building a basic UI, I configured a fetcher (SWR) to read data in JSON format from the MET Museum&apos;s publicly available API.
                    I used JavaScript&apos;s async/await syntax and prepared the fetcher for error handling to ensure an eventual API failure would not impact
                    the application. After that, I used SWR React Hooks to fetch data from the API into components (artwork cards) and pages (search results page)
                    when the user requests.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 3. Managing components state using Jotai.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    Having UI and a data fetcher ready, I used Jotai to manage the state of different components. For example, when a user clicks on “favourite”
                    to save a particular artwork to their favourite list, Jotai manages that information to ensure the state of that specific artwork component is
                    considered a favourite for that user. In this case, Jotai allows the artwork to be rendered on that user&apos;s favourites page, where it can also be
                    removed if the user changes their mind.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 4. User service API using MongoDB, Node.js and Express.js (+bcrypt).</h3>
                <p className="md:w-1/2 md:mx-auto">
                    After managing the state of the React components, I set up a user service module and an API to ensure that users can register with a username and
                    password, log in, and log out of the website. The user service module employs MongoDB to connect with a database and Mongoose to draw a NoSQL schema
                    for that database, which includes a unique username (string), password (string), favourites (array of strings), and history (array of strings). The
                    user service also supports CRUD functions (create, remove, update, delete) to handle the routes defined in the API&apos;s server (get, post, put, delete).
                    Additionally, the passwords are hashed before being stored in the database, thanks to bcrypt.js.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 5. User authentication using JSON Web Tokens (JWT).</h3>
                <p className="md:w-1/2 md:mx-auto">
                    Having completed the user service module and the user API, I implemented the user authentication feature of the back end with JWT.
                    I implemented an authentication library using jwt-decode to set, read, and remove tokens to ensure users are registered and authenticated.
                    This part of the back end was essential to ensure that only authenticated users are authorized by the application to perform the actions
                    they are attempting to execute.
                </p>
                <br />

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 6. Deployment using Vercel.</h3>
                <p className="md:w-1/2 md:mx-auto">
                    In the end, I ran the application in production mode to ensure there were no remaining errors. I tested the application in each step to ensure
                    the components were all working as expected. After correcting minor mistakes, the application was ready to be deployed, so I used Vercel as the
                    preferred cloud platform to host my application. Considering that the website was developed using Next.js, a React framework maintained by Vercel,
                    it was a very smooth deployment.
                </p>
                <br />

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Skills developed:</h2>
                <div className="md:w-1/2 md:mx-auto">
                    <p>To sum up, during this project I developed the following skills:</p>
                    <br />
                    <ul className="pl-4 list-disc">
                        <li>Web Development</li>
                        <li>User Interface (UI)</li>
                        <li>API</li>
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
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