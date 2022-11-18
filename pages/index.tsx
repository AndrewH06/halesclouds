import Head from "next/head";
import Image from "next/image";
import CloudLayout from "./components/CloudLayout";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="text-gray-800 gap-4 relative flex flex-col min-h-screen items-center pt-8 sm:pt-12">
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
          <CloudLayout />
        </main>
      </div>
      <footer className="flex justify-center w-full bg-gray-100 py-2">
        <p>This is for me. I don&apos;t care how ugly it is.</p>
      </footer>
    </div>
  );
}
