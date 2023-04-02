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
            <SpotifyProject />
        </>
    )
}

function SpotifyProject() {
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
                    <h1>Spotify Hitmakers Data Analysis</h1>
                    <p className="text-center">Who are the Top 100 Spotify Artists - based on their Top 10 Songs - and where do they come from?</p>
                    <br />
                </div>

                <iframe className="mx-auto" title="Spotify Top 100 Analysis" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiYTVhNTJmYzAtNTAzMC00ZWZhLWIwMWYtOWIwMDdkN2ExMTE1IiwidCI6ImZkYzkzMDZkLTljNDctNDc3Ni04YzEyLTI2YTc0ZDYwZGEzNyJ9" frameborder="0" allowFullScreen="true"></iframe>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Summary:</h2>
                <p className="md:w-1/2 md:mx-auto">
                    As a musician and data analyst, I wanted to use SQL to generate insights about the most famous artists on Spotify and their backgrounds.
                </p>
                <br />


                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 1. Finding and adjusting the datasets.</h3>


                <p className="md:w-1/2 md:mx-auto">
                    Browsing on Kaggle, I found a dataset that contained the 10 most popular tracks of over 2000 artists with their respective numbers of Spotify Streams. I imported the data to my Microsoft SQL Server and queried all data to have a visual reference on the table:
                </p>
                <br />
                <pre className="md:w-1/2 md:mx-auto">
                    <code>
                        -- View all data<br />
                        SELECT * FROM Spotify_Youtube;<br />
                    </code>
                </pre>

                <p className="md:w-1/2 md:mx-auto">
                    I also found a dataset containing artists&apos; metadata, including their city of origin.
                    It included 3 cities instead of one, and various fields were NULL. I adjusted that to ensure there was only one city per artist.
                </p>
                <br />
                <pre className="md:w-1/2 md:mx-auto">
                    <code>
                        -- View all data<br />
                        SELECT * FROM Spotify_Artist_Metadata;<br />
                        <br />
                        -- Adjust: change n/a to NULL, set one city instead of 3<br />
                        UPDATE Spotify_Artist_Metadata SET city_1 = NULL WHERE city_1 = &apos;n/a&apos;;<br />
                        UPDATE Spotify_Artist_Metadata SET city_2 = NULL WHERE city_2 = &apos;n/a&apos;;<br />
                        UPDATE Spotify_Artist_Metadata SET city_3 = NULL WHERE city_3 = &apos;n/a&apos;;<br />
                        UPDATE Spotify_Artist_Metadata SET city_1 = city_2 WHERE city_1 IS NULL;<br />
                        UPDATE Spotify_Artist_Metadata SET city_1 = city_3 WHERE city_1 IS NULL;<br />
                        sp_rename &apos;Spotify_Artist_Metadata.city_1&apos;, &apos;city&apos;, &apos;COLUMN&apos;;<br />
                        <br />
                        -- View adjusted data<br />
                        SELECT * FROM Spotify_Artist_Metadata;<br />
                    </code>
                </pre>

                <p className="md:w-1/2 md:mx-auto">
                    I also imported a dataset that contained country names and codes, considering the artist metadata dataset didn&apos;t hold the country names, and made a small adjustment.
                </p>
                <br />
                <pre className="md:w-1/2 md:mx-auto">
                    <code>
                        -- View relevant data<br />
                        SELECT Country, Internet FROM Countries;<br />
                        <br />
                        -- Adjust DATABASE 3: change UK/GB to GB<br />
                        UPDATE Countries SET Country = &apos;United Kingdom&apos;, Internet = &apos;GB&apos; WHERE Country = &apos;United Kingdom&apos;;<br />
                        <br />
                        -- View adjusted data<br />
                        SELECT Country, Internet FROM Countries;<br />
                    </code>
                </pre>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 2. Joining datasets into views.</h3>

                <p className="md:w-1/2 md:mx-auto">
                    After adjusting the datasets, I queried the database and created views using JOIN statements to aggregate all the needed data.
                </p>
                <br />
                <pre className="md:w-1/2 md:mx-auto">
                    -- VIEW 1: Artists + Streams<br />
                    CREATE VIEW Artist_Sreams AS<br />
                    SELECT Artist, SUM(Stream) AS &apos;Streams&apos;<br />
                    FROM Spotify_Youtube<br />
                    GROUP BY Artist;<br />
                    <br />
                    SELECT * FROM Artist_Sreams;<br />
                    <br />
                    <br />
                    -- VIEW 2: Artist + Country Code<br />
                    CREATE VIEW Artist_CountryCode AS<br />
                    SELECT DISTINCT Spotify_Youtube.Artist, Spotify_Artist_Metadata.country<br />
                    FROM Spotify_Youtube<br />
                    LEFT JOIN Spotify_Artist_Metadata ON Spotify_Youtube.Artist = Spotify_Artist_Metadata.artist;<br />
                    <br />
                    SELECT * FROM Artist_CountryCode;<br />
                    <br />
                    <br />
                    -- VIEW 3: Artist + Country Name + Region<br />
                    CREATE VIEW Artist_Country_Region AS<br />
                    SELECT Artist_CountryCode.Artist, Countries.Country, Countries.Region<br />
                    FROM Artist_CountryCode<br />
                    LEFT JOIN Countries ON Artist_CountryCode.Country = Countries.Internet;<br />
                    <br />
                    SELECT * FROM Artist_Country_Region;<br />
                    <br />
                    <br />
                    -- VIEW 4: Artist + Country Name + Region + City<br />
                    CREATE VIEW Artist_Country_Region_City AS<br />
                    SELECT DISTINCT<br />
                    Artist_Country_Region.Artist,<br />
                    Artist_Country_Region.Country,<br />
                    Artist_Country_Region.Region,<br />
                    Spotify_Artist_Metadata.City<br />
                    FROM Artist_Country_Region<br />
                    LEFT JOIN Spotify_Artist_Metadata<br />
                    ON Artist_Country_Region.Artist = Spotify_Artist_Metadata.artist;<br />
                    <br />
                    SELECT * FROM Artist_Country_Region_City;<br />
                    <br />
                    <br />
                    -- VIEW 5: Artist + Country Name + Region + Streams<br />
                    CREATE VIEW Artist_Country_Region_City_Streams AS<br />
                    SELECT<br />
                    Artist_Country_Region_City.Artist,<br />
                    Artist_Country_Region_City.Country,<br />
                    Artist_Country_Region_City.Region,<br />
                    Artist_Country_Region_City.City,<br />
                    Artist_Sreams.Streams<br />
                    FROM Artist_Country_Region_City<br />
                    JOIN Artist_Sreams ON Artist_Country_Region_City.Artist = Artist_Sreams.Artist;<br />
                    <br />
                    SELECT * FROM Artist_Country_Region_City_Streams;<br />
                </pre>


                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 3. Final queries for analysis.</h3>

                <p className="md:w-1/2 md:mx-auto">
                    After joining the initial datasets, I separated the data into two queries: (1) top 100 artists, albums, tracks, and streams; (2) top 100 artists, country, region, city, and streams.
                </p>
                <br />
                <pre className="md:w-1/2 md:mx-auto">
                    -- Top 100: Artist + Country + Region + City + Streams<br />
                    CREATE VIEW top100 AS<br />
                    SELECT TOP 100 artist, country, region, city, streams<br />
                    FROM Artist_Country_Region_City_Streams<br />
                    ORDER BY streams DESC;<br />
                    <br />
                    SELECT * FROM top100;<br />
                    <br />
                    <br />
                    -- Top 100: Artist + Album + Track + Streams<br />
                    SELECT Spotify_Youtube.Artist, Spotify_Youtube.Album, Spotify_Youtube.Track, Spotify_Youtube.Stream<br />
                    FROM Spotify_Youtube<br />
                    INNER JOIN top100 ON Spotify_Youtube.artist = top100.artist<br />
                    ORDER BY Spotify_Youtube.Stream DESC;<br />
                </pre>

                <h3 className="md:w-1/2 md:mx-auto text-left pl-0">Step 4. Adjustments on Excel and visualization on Power BI.</h3>

                <p className="md:w-1/2 md:mx-auto">
                    Ultimately, I opened the resulting queries in Excel, added a few missing values (cities and countries missing for 12 artists), and loaded the data on Power BI to design the dashboard.
                </p>

                <h2 className="md:w-1/2 md:mx-auto text-left pl-0">Skills developed:</h2>
                <div className="md:w-1/2 md:mx-auto">
                    <p>To sum up, during this project I developed the following skills:</p>
                    <br />
                    <ul className="pl-4 list-disc">
                        <li>Database Management</li>
                        <li>Data Analysis</li>
                        <li>Data Visualization</li>
                        <li>SQL</li>
                        <li>Microsoft Excel</li>
                        <li>Power BI</li>
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