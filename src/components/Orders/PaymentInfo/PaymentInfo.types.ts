export interface PaymentInfoProps {
  data: {
    key: "label" | "price";
    label: string;
    value: number | string;
  }[];
}
