import { FormEvent, useEffect, useState } from "react";
import { useStripe, useElements, Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N0AdUAcitfUY8n6q3OfCbMOIn4tWl7Dki3qbTbhEts7FbQ8sijvvfGQp65Z1JHQZdMBGOuRGTwWjOCXjT4JtsM700DJgaaErP');

const CheckoutForm = ({ clientSecret }: { clientSecret: string | null }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.error("Stripe or elements are not loaded yet");
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://www.google.com",
      }
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Payment succeeded");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !clientSecret}>Submit</button>
    </form>
  );
};

type Props = {};

const Payment = ({}: Props) => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000, currency: 'usd' }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching clientSecret", error));
  }, []);

  const options = {
    clientSecret: clientSecret || undefined,
  };

  return (
    <>
      {clientSecret ? (
      <Elements stripe={stripePromise} options={ options }>
        <CheckoutForm clientSecret={clientSecret} />
      </Elements>
    ) : (
      <div>Loading payment...</div>
    )}
    </>
  );
};

export default Payment;
