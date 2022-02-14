import { Navbar } from 'layout/Navbar';
import Head from 'next/head';

export function Layout(props: {
  children: any
  pageName?: string
  siteName?: string
}) {
  const siteName = props.siteName || "Vehicle Classifieds"
  const pageName = props.pageName || ""
  return (
    <>
      <Head>
        <title>
          {siteName}
          {pageName && ": " + pageName}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="px-5 py-3 mb-5 text-center text-sm w-full  bg-teal-100">
          ¿Deseas publicar tu vehículo?{" "}
          <span className="underline font-semibold">Aprende cómo</span>
        </div>
        {props.children}
      </main>
    </>
  )
}
