import Head from 'next/head'
import Contact from '../components/Contact'
import Expertise from '../components/Expertise'
import Hero from '../components/Hero'
import Projects from '../components/Projects/Projects'
import Service from '../components/Service'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coding With Prince</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:px-[15%] px-5">
        {/* === About === */}
        <Hero />
        {/* === Services === */}
        <Service />
        {/* === Projects === */}
        <Projects />
        {/* === Expertise === */}
        <Expertise />
        {/* === Contact === */}
        {/* <Contact /> */}
      </main>
    </div>
  )
}
