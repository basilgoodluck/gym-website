import { FormEvent } from "react";
import { useStripe, useElements, Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N0AdUAcitfUY8n6q3OfCbMOIn4tWl7Dki3qbTbhEts7FbQ8sijvvfGQp65Z1JHQZdMBGOuRGTwWjOCXjT4JtsM700DJgaaErP');

const CheckoutForm = () => {
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
      <button type="submit" disabled={!stripe}>Submit</button>
    </form>
  );
};

type Props = {};

const Payment = ({}: Props) => {
  const options = {
    clientSecret: "{{CLIENT_SECRET}}",
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Payment;
