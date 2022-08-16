import React, { FC } from 'react';
import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { Comunity } from './components/Comunity';

export const AdvantagesSection: FC = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView();

  // const squareVariants = {
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //     },
  //   },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  // 0;
  // useEffect(() => {
  //   if (inView) {
  //     controls.start('visible');
  //   }
  // }, [controls, inView]);
  const inViewOptions = {
    opacity: 1,
    x: [300, -100, 10, 0],
    transition: {
      duration: 1,
    },
  };

  return (
    <section className=" min-h-[458px] w-full max-w-[1366px] flex flex-col px-6 pt-10 overflow-hidden">
      <h1 className=" w-full font-northwell text-[35px] text-btn_1 mb-3 ">
        Our advantages
      </h1>
      <div className=" w-full font-semibold text-[35px] text-gray_5">
        Why choose Suav?
      </div>
      <div className="w-[full] h-[745px] bg-[#120507] my-[54px] rounded-[40px] flex flex-col items-end justify-between p-[40px] bgmio">
        <motion.div
          whileInView={inViewOptions}
          exit={{ x: 0, opacity: 0 }}
          className="w-[60%] min-h-[190px] p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Discover & book stylists near you
          </h3>
          <div className="text-gray_5 text-[18px]">
            Easily find nearby beauty providers in your area. Save money & time
            on long trips. Get the best prices & service from a stylist that
            understands exactly what you’re looking for.
          </div>
        </motion.div>
        <motion.div
          whileInView={inViewOptions}
          exit={{ opacity: 0 }}
          className="w-[60%] min-h-[190px]  p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Say goodbye to inconsistent results
          </h3>
          <div className="text-gray_5 text-[18px]">
            Get a VIP sneak-peek access to 100+ stylists before booking. Check
            their ratings, review their portfolio, learn their interests & book
            a service that best fits your needs.
          </div>
        </motion.div>
        <motion.div
          whileInView={inViewOptions}
          exit={{ x: 0, opacity: 0 }}
          className="w-[60%] min-h-[190px] p-[24px] rounded-[35px] bg-gray_1 flex flex-col justify-evenly">
          <h3 className="text-[22px] text-gray_5 font-semibold">
            Unlock opportunities doing what you love
          </h3>
          <div className="text-gray_5 text-[18px]">
            Earn your career at your own schedule. Take the guesswork out of
            marketing. Gain the insights that you need to grow your business
            without draining your budget anywhere you go.
          </div>
        </motion.div>
      </div>
      <Comunity />
    </section>
  );
};
