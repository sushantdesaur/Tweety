// client/index.js
import Image from "next/image"
import Head from 'next/head'


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

      <main className="bg-black min-h-screen flex max-w-[1800px] mx-auto">
        <Image src="/index.png" width={800} height={800} />
      </main>

      <footer></footer>
    </div>
  );
}
