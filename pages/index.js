import Head from 'next/head';
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Felipe Graca</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout />
    </>
  )
}
