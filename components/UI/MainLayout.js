import React from "react";
import Head from "next/head";
import Navbar from "components/Navbar/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Head>
        <title>Countries</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta description="A countries site created using Next.js and tailwind CSS" />
      </Head>

      <Navbar />
      <main className="pt-10 px-7  md:pt-20 md:px-20 ">{children}</main>
    </>
  );
}

export default MainLayout;
