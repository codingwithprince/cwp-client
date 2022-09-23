import Head from 'next/head'
import About from '../components/About'
import Projects from '../components/Projects'

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
        <About />
        {/* === Projects === */}
        <Projects />
      </main>
    </div>
  )
}
