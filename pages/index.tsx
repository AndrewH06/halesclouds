import Head from "next/head";
import Image from "next/image";
import AllClouds from "./components/AllClouds";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="text-gray-800 gap-4 relative flex flex-col min-h-screen items-center mx-24 pt-8 sm:pt-12">
      <Head>
        <title>Hale&apos;s Clouds</title>
        <meta name="description" content="Quickly identify clouds" />
        <meta property="og:image" content="/me.jpg" />
        <link rel="icon" href="/cloud-icon.png" />
      </Head>
      <div className="flex flex-col md:gap-2 w-full min-h-screen max-w-[1080px] mx-8 sm:mx-24 md:mx-32">
        <header>
          <Header />
        </header>
        <main className="mt-8">
          <AllClouds />
        </main>
      </div>
      <footer className="mt-8 flex justify-center w-screen bg-gray-100 py-2 px-8 text-center">
        <p>
          This is still an early implementation of the website. More features
          will be added in the future.
        </p>
      </footer>
    </div>
  );
}
