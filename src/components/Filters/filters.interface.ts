/* eslint-disable no-unused-vars */
export enum TCurrentSection {
  HOME = 'Home',
  CHAT = 'Chat',
  SETTINGS = 'Settings',
}
export interface IFiltersProps {
  currentSection: TCurrentSection;
  byPrice: string;
  byExpertise: string;
  byCategory: string;
}
