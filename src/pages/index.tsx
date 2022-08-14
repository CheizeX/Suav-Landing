import type { NextPage } from 'next';
import Head from 'next/head';
import { Navbar } from '../components/Navbar/Navbar';
import { IFiltersProps } from '../components/Filters/filters.interface';
import { Hero } from '../components/sections/Hero/Hero';
import { SecondSection } from '../components/sections/SecondSection/SecondSection';
import { DiscoverSection } from '../components/sections/DiscoverSection/DiscoverSection';
import { AdvantagesSection } from '../components/sections/AdvantagesSection/AdvantagesSection';
import { OurBlogSection } from '../components/sections/OurBlogSection/OurBlogSection';
import { Footer } from '../components/Footer/Footer';

const Home: NextPage<IFiltersProps> = () => {
  return (
    <>
      <Head>
        <title>SUAV BEAUTY LANDING</title>
        <meta name="description" content="landing page" />
      </Head>
      <main className="container flex flex-col justify-start items-center w-full min-w-[1080px] h-fit relative overflow-hidden">
        <Navbar />
        <Hero />
        <SecondSection />
        <DiscoverSection />
        <AdvantagesSection />
        <OurBlogSection />
        <Footer />
      </main>
    </>
  );
};

export default Home;
