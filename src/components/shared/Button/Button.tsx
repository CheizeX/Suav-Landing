/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

import { FC, MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export enum Size {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  FULL = 'FULL',
  FULLWITHSMALLFONT = 'FULLWITHSMALLFONT',
}

export enum ButtonState {
  NORMAL = 'NORMAL',
  DISABLED = 'DISABLED',
  LOADING = 'LOADING',
}

export enum ButtonVariant {
  FILLED = 'FILLED',
  OUTLINED = 'OUTLINED',
}

export interface ButtonMoleculeProps {
  type?: 'button' | 'reset' | 'submit' | undefined;
  text: string;
  size?: Size;
  variant?: ButtonVariant;
  state?: ButtonState;
  bgColor?: string;
  leftIcon?: () => JSX.Element;
  rightIcon?: () => JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonProps {
  variant?: ButtonVariant;
  size: Size;
  bgColor?: string;
  $loading: boolean;
}

export const LoadingLayer = styled.div`
  position: absolute;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  & * {
    /* fill: ${({ theme }) => theme.Colors.grays[9]}; */
  }
`;

const loadingCss = css<{ bgColor?: string }>`
  & > * {
    visibility: hidden;
  }

  & > ${LoadingLayer} {
    visibility: visible;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1;
    background-color: ${({ bgColor }) =>
      bgColor && bgColor !== '' ? bgColor : '#f5f5f5ac'};
  }
`;

const outlinedButtonStyles = css<{ bgColor?: string }>`
  transition: all 0.2s ease-in-out;
  border-radius: 13px;
  border: solid 3px transparent;
  background-image: linear-gradient(#ff00ff, #05efff),
    linear-gradient(248deg, #ff00ff, #05efff);
  background-origin: border-box;
  background-clip: content-box, border-box;
  -webkit-background-clip: content-box, border-box;
  box-shadow: 3px 1000px 1px #fff inset;
  background-position: center;
  heiht: 50px;
  width: 130px;
  border-radius: 13px;
  & span {
    transition: all 0.2s ease-in-out;
    background-origin: border-box;
    background-clip: border-box;
    background: transparent linear-gradient(108deg, #ff00ff 0%, #05efff 100%) 0%
      0% no-repeat padding-box;
    background-size: 100% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:hover {
    @keyframes animatedgradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    animation: animatedgradient 3s ease infinite;
    & span {
      transition: all 0.2s ease-in-out;
      background-origin: border-box;
      background-clip: border-box;
      background: transparent linear-gradient(108deg, #05efff 0%, #ff00ff 100%)
        0% 0% no-repeat padding-box;
      background-size: 100% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &:active {
    background-size: inherit;
    & span {
      background-size: inherit;
    }
  }
`;

export const StyledButton = styled(motion.button)<ButtonProps>`
  position: relative;
  flex: 1 1 auto;
  text-align: center;
  transition: 0.3s;
  background-size: 100% auto;
  color: white;
  border-radius: 10px;
  background-image: linear-gradient(98deg, #d95aff 0%, #05efff 100%);
  height: 50px;
  width: 130px;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Plus Jakarta Display';
  ${({ size }) => (size === Size.SMALL ? `height: 32px;` : null)}
  ${({ size }) => (size === Size.MEDIUM ? `height: 40px;` : null)}
  ${({ size }) =>
    size === Size.LARGE ? `height: 48px; max-width: 130px;` : null}
  ${({ size }) =>
    size === Size.FULL
      ? `min-width: 100%; height:100%; max-height: 70px; font-size: 18px; border-radius: 13px;`
      : null}
  ${({ size }) =>
    size === Size.FULLWITHSMALLFONT
      ? `min-width: 100%; height:100%; max-height: 70px; font-size: 12px; border-radius: 13px;`
      : null}
  &:hover {
    background-size: 500% auto;
    background-position: right center;
    ${({ size }) =>
      size === Size.FULL ? `box-shadow: 0px 1px 3px 0px #b2b2b2;` : null}
  }
  &:active {
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & > * {
    margin: 0 2px;
  }

  ${({ variant }) =>
    variant === ButtonVariant.OUTLINED ? outlinedButtonStyles : null}
  ${({ $loading }) => ($loading ? loadingCss : null)}
`;

export const ButtonMolecule: FC<ButtonMoleculeProps> = ({
  text,
  type,
  size = Size.SMALL,
  variant = ButtonVariant.FILLED,
  state = ButtonState.NORMAL,
  bgColor,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      transition={{ duration: 0.03 }}
      type={type}
      variant={variant}
      size={size}
      bgColor={bgColor ?? ''}
      disabled={state === ButtonState.DISABLED || state === ButtonState.LOADING}
      onClick={onClick ?? (() => {})}
      $loading={state === ButtonState.LOADING}>
      {leftIcon && leftIcon()}
      <span
        color={
          variant === ButtonVariant.OUTLINED ? bgColor || '#8520D0' : '#FFF'
        }>
        {text}
      </span>
      {rightIcon && rightIcon()}
      {state === ButtonState.LOADING && (
        <LoadingLayer>
          {/* <SVGIcon color="#FFF" iconFile="/icons/button-loading.svg" /> */}
        </LoadingLayer>
      )}
    </StyledButton>
  );
};
