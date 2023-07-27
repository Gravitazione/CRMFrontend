import { atomWithStorage } from 'jotai/utils';

export const bannerActive = atomWithStorage<boolean>('bannerActive', false);
export const dataActive = atomWithStorage<boolean>('dataActive', false);
export const articleActive = atomWithStorage<boolean>('articleActive', false);