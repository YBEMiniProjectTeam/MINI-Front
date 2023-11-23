import * as S from "./Footer.styles.ts";

export const Footer = (): JSX.Element => {
  return (
    <S.FooterContainer>
      <h3>DAILYHOTEL</h3>
      <span>
        (주) 야놀자ㅣ대표이사: 이수진, 김종윤, 배보찬ㅣ대표연락처: 1800-9120
      </span>
      <br />
      <span>주소: 서울시 강남구 테헤란로 108길 42</span>
      <br />
      <span>사업자등록번호: 220-87-42885</span>
      <br />
      <span>통신판매업 신고번호: 강남-14211호</span>
      <br />
      <span>대표이메일주소: help@dailyhotel.com</span>

      <div className="copyrightContainer">
        <p>
          (주)야놀자는 통신판매중개자로서 통신판매의 당사자가 아니며 상품의
          예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
        </p>
        <br />
        <p>
          (주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트
          정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단
          복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및
          콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
        </p>
      </div>
    </S.FooterContainer>
  );
};
