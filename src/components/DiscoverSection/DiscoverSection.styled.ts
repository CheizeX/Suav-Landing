import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledSlider = styled(motion.div)`
  width: 100%;
  min-height: 385px;
  margin-left: 54px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledImageWrapper = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 382px;
  min-height: 382px;
  position: relative;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 27px;
`;

export const StyledOverImage = styled.div`
  min-width: 382px;
  min-height: 382px;
  border-radius: 27px;
  position: absolute;
  opacity: 0.6;
  top: 0;
  left: 0;
  z-index: 1;
  background: transparent
    linear-gradient(180deg, #d3fcff00 0%, #64106ad7 85%, #2f002f 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 1px 4px #00000014;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
`;
