import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <Head>
        <title>Profile Sample</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1"></div>
          <div className="col-span-1 space-y-4">
            <AboutMe />

            <Gallery />
          </div>
        </div>
      </main>
    </div>
  );
}
