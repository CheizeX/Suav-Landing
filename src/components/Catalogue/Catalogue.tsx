import React, { FC, useCallback, useEffect, useRef } from 'react';
import { IFiltersProps } from '../Filters/filters.interface';
import { Card } from './shared/Card';
import { objItems } from './shared/objItems';

interface IProps {
  filters: IFiltersProps;
}

export const Catalogue: FC<IProps> = ({ filters }) => {
  const topCatalogueRef = useRef<HTMLDivElement>(null);

  const scrollUp = useCallback(() => {
    topCatalogueRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [topCatalogueRef]);

  useEffect(scrollUp, [topCatalogueRef, filters, scrollUp]);

  return (
    <>
      <div className="container h-[100%] overflow-auto scroll-smooth hover:scroll-auto overflowHideScroll">
        <div ref={topCatalogueRef} />
        {objItems
          .filter((item) => item.price >= Number(filters.byPrice))
          .map((item, index) => (
            <Card quantity={index + 1} key={index.toString()} item={item} />
          ))}
      </div>
    </>
  );
};
