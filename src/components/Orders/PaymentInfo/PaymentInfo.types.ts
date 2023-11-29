export interface PaymentInfoProps {
  data?: {
    key: "label" | "total" | "price";
    label: string;
    value: number | string;
  }[];
  totalPrice?: number;
}
