import React, { useEffect, useState } from "react";
import type { DeferredComponentProps } from "./AsyncWrapper.types";

const DeferredComponent = ({ children }: DeferredComponentProps) => {
  const [renderFirstComponent, setRenderFirstComponent] = useState(false);
  const [renderSecondComponent, setRenderSecondComponent] = useState(false);

  useEffect(() => {
    const firstTimeoutId = setTimeout(() => {
      setRenderFirstComponent(true);
    }, 200);

    const secondTimeoutId = setTimeout(() => {
      setRenderSecondComponent(true);
    }, 400);

    return () => {
      clearTimeout(firstTimeoutId);
      clearTimeout(secondTimeoutId);
    };
  }, []);

  const childArray = React.Children.toArray(children);

  return (
    <>
      {renderFirstComponent && childArray[0]}
      {renderSecondComponent && childArray[1]}
    </>
  );
};

export default DeferredComponent;
