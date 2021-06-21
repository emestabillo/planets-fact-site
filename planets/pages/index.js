import Head from "next/head";
import MainWrapper from "../components/MainWrapper";
import Navbar from "../components/Navbar";
import { PlanetData } from "../data/planets";

export default function Home() {
  return (
    <>
      <Head>
        <title>Planets!</title>
        <meta name="description" content="facts about planets" />
      </Head>
      <Navbar />
      <MainWrapper />
    </>
  );
}
