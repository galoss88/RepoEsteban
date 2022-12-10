/* istanbul ignore file */
import { BREAKPOINTS } from '../constants/breakpoints';

export const mediaQuery = {
  mobileOnly: (children: string) => `@media (max-width: ${BREAKPOINTS.mobile}px) {${children}}`,
  mobileToTablet: (children: string) => `@media (max-width: ${BREAKPOINTS.tablet}px) {${children}}`,
  mobileToLaptop: (children: string) => `@media (max-width: ${BREAKPOINTS.laptop}px) {${children}}`,
  mobileToDesktop: (children: string) =>
    `@media (max-width: ${BREAKPOINTS.desktop}px) {${children}}`,
  tabletOnly: (children: string) =>
    `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${
      BREAKPOINTS.tablet
    }px) {${children}}`,
  tabletToLaptop: (children: string) =>
    `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${
      BREAKPOINTS.laptop
    }px) {${children}}`,
  tabletToDesktop: (children: string) =>
    `@media (min-width: ${BREAKPOINTS.mobile + 1}px) and (max-width: ${
      BREAKPOINTS.desktop
    }px) {${children}}`,
  tabletToUp: (children: string) => `@media (min-width: ${BREAKPOINTS.mobile + 1}px) {${children}}`,
  laptopOnly: (children: string) =>
    `@media (min-width: ${BREAKPOINTS.tablet + 1}px) and (max-width: ${BREAKPOINTS.laptop}px) {
      ${children}
    }`,
  laptopToDesktop: (children: string) => `@media (min-width: ${
    BREAKPOINTS.tablet + 1
  }px) and (max-width: ${BREAKPOINTS.desktop}px) {
    ${children}
  }`,
  laptopToUp: (children: string) => `@media (min-width: ${BREAKPOINTS.tablet + 1}px) {${children}}`,
  desktopToUp: (children: string) =>
    `@media (min-width: ${BREAKPOINTS.laptop + 1}px) {${children}}`,
  customToUp: (minWidth: number, children: string) =>
    `@media (min-width: ${minWidth}px) {${children}}`,
  customBetween: (minWidth: number, maxWidth: number, children: string) =>
    `@media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {${children}}`,
};
