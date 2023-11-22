import * as S from "./AgreementModalStyles";
import { Checkbox, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import Swal from "sweetalert2";

export const AgreementModalForm = (props: {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAgreement: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const [isCheckAgreement, setIsCheckAgreement] = useState(false);

  const backgroundContainerRef = useRef<HTMLInputElement>(null);

  const handleClickBackgroundContainer = (
    e: React.MouseEvent<HTMLInputElement>
  ): void => {
    if (e.target === backgroundContainerRef.current) {
      props.setIsShowModal(false);
    }
  };
  const handleChangeCheckBox = (): void => {
    setIsCheckAgreement(!isCheckAgreement);
  };
  const handleClickConfirmBtn = (): void => {
    if (isCheckAgreement) {
      props.setIsShowModal(false);
      props.setIsAgreement(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "약관에 동의해주세요"
      });
    }
  };
  return (
    <S.BackgroundContainer
      ref={backgroundContainerRef}
      onClick={handleClickBackgroundContainer}
    >
      <S.ModalContainer>
        <div>
          <h3>약관에 동의해주세요.</h3>
          <Checkbox onChange={handleChangeCheckBox}>
            만 14세 이상입니까? (필수)
          </Checkbox>
        </div>
        <Button onClick={handleClickConfirmBtn}>확인</Button>
      </S.ModalContainer>
    </S.BackgroundContainer>
  );
};
