import { ComponentType, ReactNode } from "react";
import { AxiosError } from "axios";

export interface AsyncWrapperProps {
  children: ReactNode;
}

export type ErrorBoundaryState = {
  hasError: boolean;
  error: Error;
};

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void; // resetErrorBoundary 함수를 사용하는쪽에서 사용 가능하도록 props로 전달
};

export type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  onReset: () => void;
  children: ReactNode;
};

// FIXME: 공통 type로 분리할 것
export type Error = AxiosError | null;
