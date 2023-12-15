import * as S from "./AgreementModalStyles";
import { Checkbox, Button } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

export const AgreementModalForm = (props: {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAgreement: React.Dispatch<React.SetStateAction<boolean>>;
  loginRequest: () => Promise<void>;
}) => {
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
  const handleClickConfirmBtn = async (): Promise<void> => {
    if (isCheckAgreement) {
      await props.loginRequest();

      props.setIsShowModal(false);
      props.setIsAgreement(true);
    } else {
      toast.error("약관에 동의해주세요.");
    }
  };
  return (
    <S.BackgroundContainer
      ref={backgroundContainerRef}
      onClick={handleClickBackgroundContainer}
      id="modal"
    >
      <S.ModalContainer>
        <div>
          <h3>약관에 동의해주세요.</h3>
          <Checkbox id="agreement" onChange={handleChangeCheckBox}>
            만 14세 이상입니까? (필수)
          </Checkbox>
        </div>
        <Button id="agreementBtn" onClick={handleClickConfirmBtn}>
          확인
        </Button>
      </S.ModalContainer>
    </S.BackgroundContainer>
  );
};
