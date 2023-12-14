import Card from "@components/Card/Card";
import PaymentInfoSkeleton from "@components/Orders/PaymentSkeleton/PaymentInfoSkeleton.tsx";
import ReservationSkeleton from "@components/Orders/PaymentSkeleton/ReservationSkeleton.tsx";
import * as styles from "@pages/payment/Payment.styles";

const PaymentSkeleton = () => {
  return (
    <styles.Container>
      <Card>
        <ReservationSkeleton />
      </Card>
      <Card>
        <ReservationSkeleton />
      </Card>
      <Card>
        <PaymentInfoSkeleton />
      </Card>
      <Card>
        <PaymentInfoSkeleton />
      </Card>
    </styles.Container>
  );
};

export default PaymentSkeleton;
