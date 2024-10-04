import { useState } from "react";
type PaymentProps = {
  price: number;
};
export const Payment = ({ price = 0 }: PaymentProps) => {
  const [isPayment, setIsPayment] = useState(0);

  return <span>{isPayment * price}</span>;
};