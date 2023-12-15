import { AxiosError } from "axios";
import { Component, createElement, ErrorInfo } from "react";
import type {
  ErrorBoundaryState,
  FallbackProps,
  ErrorBoundaryProps
} from "./AsyncWrapper.types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
      error: null
    };

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this); // this 바인딩 처리
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    if ((error as AxiosError).isAxiosError) {
      return {
        hasError: true,
        error: error as AxiosError
      };
    }

    return {
      hasError: true,
      error: null
    };
  }

  resetErrorBoundary(): void {
    this.props.onReset();

    this.setState({
      hasError: false,
      error: null
    });
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo });
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps): void {
    if (this.props.resetKey !== prevProps.resetKey) {
      if (this.state.hasError) {
        this.resetErrorBoundary();
      }
    }
  }

  render() {
    const { state, props, resetErrorBoundary } = this;

    const { hasError, error } = state;

    const { fallback, children } = props;

    const fallbackProps: FallbackProps = {
      error,
      resetErrorBoundary
    };

    const fallbackComponent = createElement(fallback, fallbackProps);

    return hasError ? fallbackComponent : children;
  }
}

export default ErrorBoundary;
