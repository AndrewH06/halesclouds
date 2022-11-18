import Head from "next/head";
import Image from "next/image";
import CloudLayout from "./components/CloudLayout";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="text-gray-800 relative flex flex-col min-h-screen items-center pt-8 sm:pt-12">
      <Head>
        <title>Hale's Clouds</title>
        <meta name="description" content="Quickly identify clouds" />
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
      <footer className="w-full">
        <div>poo</div>
      </footer>
    </div>
  );
}
