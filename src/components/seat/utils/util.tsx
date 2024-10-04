import { useState, useEffect } from "react";
type PaymentProps = {
  number:number,
};
export const Payment = ({ number }: PaymentProps) => {
  const price = 10000;
  return number * price;
};