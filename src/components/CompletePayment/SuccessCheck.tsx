import React from "react";
import Lottie from "lottie-react";
import successCheckLottie from "@assets/lottie/success_check.json";

const SuccessMark: React.FC = () => {
  return (
    <Lottie
      animationData={successCheckLottie}
      loop={false}
      style={{ width: 96, height: 96 }}
    />
  );
};

export default SuccessMark;
