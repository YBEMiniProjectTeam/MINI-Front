import { useEffect, useState } from "react";
import type { DeferredComponentProps } from "./AsyncWrapper.types";

const DeferredComponent = ({ children }: DeferredComponentProps) => {
  const [isDeferred, setIsDeferred] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsDeferred(true);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isDeferred) {
    return null;
  }

  return <>{children}</>;
};

export default DeferredComponent;
