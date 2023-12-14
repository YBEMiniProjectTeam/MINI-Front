import { AccommodationSingleViewSkeleton } from '@components/Main/MainSkeleton/AccommodationSingleViewSkeleton';
import { MainCarouselSkeleton } from './MainCarouselSkeleton';
import { MainCategoryMenuSkeleton } from './MainCategoryMenuSkeleton';
import { AccommodationGridViewSkeleton } from './AccommodationGridViewSkeleton';

export const MainSkeleton = () => (
  <>
    <MainCarouselSkeleton />
    <MainCategoryMenuSkeleton />
    <AccommodationSingleViewSkeleton />
    <AccommodationGridViewSkeleton />
  </>
);