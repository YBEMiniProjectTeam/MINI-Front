import { ReactNode } from "react";

export interface SlickButtonFixProps {
  currentSlide?: number;
  slideCount?: number;
  children: ReactNode;
}