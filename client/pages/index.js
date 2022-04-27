// client/index.js

import Head from 'next/head'
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tweety</title>
        <meta
          name="description"
          content="Twitter Clone using React and Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto "> 
        {/* Sidebar */}
        <Sidebar/>
        {/*  Feed */}
        {/*  Widgets */}

        {/* Modal */}
      </main>

      <footer>
      </footer>
    </div>
  );
}
