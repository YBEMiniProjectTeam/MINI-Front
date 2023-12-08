import { Suspense } from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import ErrorFallback from "./ErrorFallback";
import SuspenseFallback from "./SuspenseFallback";
import type { AsyncWrapperProps } from "./AsyncWrapper.types";

const AsyncWrapper = ({ children }: AsyncWrapperProps) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={ErrorFallback} onReset={reset}>
      <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncWrapper;
