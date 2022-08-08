import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar/Navbar';
import {
  IFiltersProps,
} from '../components/Filters/filters.interface';
import { Hero } from '../components/Hero/Hero';
import { SecondSection } from '../components/SecondSection/SecondSection';
import { DiscoverSection } from '../components/DiscoverSection/DiscoverSection';

const Home: NextPage<IFiltersProps> = () => {

  return (
    <>
      <Head>
        <title>SUAV BEAUTY LANDING</title>
        <meta name="description" content="landing page" />
      </Head>
      <main className="container flex flex-col justify-start items-center w-full min-w-[1080px] max-w-[1366px] h-full border relative">
        <Navbar />
        <Hero />
        <SecondSection />
        <DiscoverSection />
      </main>
    </>
  );
};

export default Home;
