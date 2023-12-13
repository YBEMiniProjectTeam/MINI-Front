import loadingLottie from "@assets/lottie/loading.json";
import * as styles from "./Loading.styles";
import Lottie from "lottie-react";

const Loading = () => {
  return (
    <styles.Overlay>
      <Lottie
        animationData={loadingLottie}
        style={{ width: 300, height: 300 }}
      />
    </styles.Overlay>
  );
};

export default Loading;
