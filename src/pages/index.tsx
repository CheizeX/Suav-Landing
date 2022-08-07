import type { NextPage } from 'next';
import Head from 'next/head';
import { Tabs } from '../components/Tabs/Tabs';
import { Navbar } from '../components/Navbar/Navbar';
import { Search } from '../components/Search/Search';
import { Filters } from '../components/Filters/Filters';
import { Footer } from '../components/Footer/Footer';
import { Catalogue } from '../components/Catalogue/Catalogue';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from '../components/shared/Modal/Modal';
import { useAppSelector } from '../redux/hook/hooks';
import {
  IFiltersProps,
  TCurrentSection,
} from '../components/Filters/filters.interface';
import { Hero } from '../components/Hero/Hero';
import { SecondSection } from '../components/SecondSection/SecondSection';
import { DiscoverSection } from '../components/DiscoverSection/DiscoverSection';

const Home: NextPage<IFiltersProps> = () => {
  const { activeTabInState } = useAppSelector((state) => state.ui);

  const topCatalogueRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<IFiltersProps>({
    currentSection: TCurrentSection.HOME,
    byPrice: '0',
    byExpertise: '0',
    byCategory: '',
  });

  const scrollUp = useCallback(() => {
    topCatalogueRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [topCatalogueRef]);

  useEffect(scrollUp, [topCatalogueRef, filters]);

  return (
    <>
      <Head>
        <title>SUAV BEAUTY LANDING</title>
        <meta name="description" content="landing page" />
      </Head>
      <main className="container flex flex-col justify-start items-center w-full min-w-[320px] max-w-[1366px] h-full relative">
        <Navbar />
        <Hero />
        <SecondSection />
        <DiscoverSection />
      </main>
    </>
  );
};

export default Home;
