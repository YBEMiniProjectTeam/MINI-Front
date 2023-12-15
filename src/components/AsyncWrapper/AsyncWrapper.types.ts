import { ComponentType, ReactNode } from "react";
import { AxiosError } from "axios";

export interface AsyncWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export type ErrorBoundaryState = {
  hasError: boolean;
  error: Error;
};

export type FallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export type ErrorBoundaryProps = {
  fallback: ComponentType<FallbackProps>;
  onReset: () => void;
  children: ReactNode;
  resetKey: string;
};

export interface DeferredComponentProps {
  children: ReactNode;
}

export type Error = AxiosError | null;
