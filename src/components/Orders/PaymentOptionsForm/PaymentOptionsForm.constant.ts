import CREDITCARD from "@assets/icon/ic_credit_card.png";
import KAKAO from "@assets/icon/ic_kakao.png";
import MOBILE from "@assets/icon/ic_mobile.png";
import NAVERPAY from "@assets/icon/ic_naverpay.png";
import PAYCO from "@assets/icon/ic_payco.png";
import TOSS from "@assets/icon/ic_toss.png";

export const PAYMENT_OPTIONS = [
  {
    label: "토스페이",
    value: "Toss",
    icon: TOSS,
    event: "3만원 이상 2천원 즉시할인!"
  },
  { label: "카카오페이", value: "KakaoPay", icon: KAKAO, event: null },
  {
    label: "네이버페이",
    value: "NaverPay",
    icon: NAVERPAY,
    event:
      "주문 변경 시 카드사 혜택/할부 적용 여부는 카드사 정책에 따라 변경될 수 있습니다."
  },
  {
    label: "신용/체크카드",
    value: "CreditCard",
    icon: CREDITCARD,
    event: null
  },
  { label: "휴대폰 결제", value: "mobile", icon: MOBILE, event: null },
  { label: "페이코", value: "Payco", icon: PAYCO, event: null }
];
