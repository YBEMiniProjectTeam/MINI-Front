export interface PaymentSubmitButtonProps {
  totalPrice: number;
  userData?: {
    name: string;
    email: string;
  };
  cartIds: number[];
}
