import * as S from "./Footer.styles.ts";

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <h3>NINE STAY</h3>
      <span>패스트캠퍼스 프론트엔드/백엔드 개발부트캠프_미니프로젝트</span>
      <br />
      <span>기간: 2023.11.17 ~ 2023.12.01</span>
      <br />
      <span>프론트엔드: 박나영, 박용희, 이승현, 정서현, 한은지</span>
      <br />
      <span>백엔드: 고동훤, 김준래, 박경탁, 정현도</span>
      <br />
      <span>저희 프젝인원들 수고하셨어요.</span>

      <div className="copyrightContainer">
        <p>
          <a href="https://github.com/YBEMiniProjectTeam">
            해당 GitHub 바로가기
          </a>
        </p>
        <br />
        <p>
          <a href="https://fastcampus.co.kr/">패스트캠퍼스 바로가기</a>
        </p>
      </div>
    </S.FooterContainer>
  );
};
