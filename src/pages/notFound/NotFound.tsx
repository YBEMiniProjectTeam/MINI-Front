import { Button } from "@chakra-ui/react";
import * as styled from "./NotFound.styles";

const NotFound = () => {
  return (
    <styled.PageContainer>
      <p>
        <styled.NotFoundTitle>404 Page Not Found</styled.NotFoundTitle>
        <styled.NotFoundMessage>
          요청하신 페이지를 찾을 수 없습니다.
        </styled.NotFoundMessage>
      </p>
      <styled.ButtonWrapper>
        <a href="/">
          <Button w="26rem">홈으로 돌아가기</Button>
        </a>
      </styled.ButtonWrapper>
    </styled.PageContainer>
  );
};

export default NotFound;
