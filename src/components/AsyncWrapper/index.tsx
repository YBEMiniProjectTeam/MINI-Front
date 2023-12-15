import { Suspense } from "react";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import ErrorFallback from "./ErrorFallback";
import type { AsyncWrapperProps } from "./AsyncWrapper.types";

const AsyncWrapper = ({ children, fallback }: AsyncWrapperProps) => {
  const { reset } = useQueryErrorResetBoundary();
  console.log(location.pathname);
  return (
    <ErrorBoundary
      fallback={ErrorFallback}
      onReset={reset}
      resetKey={location.pathname}
    >
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default AsyncWrapper;
