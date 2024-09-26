import { FormEvent, useEffect, useState } from "react";
import { useStripe, useElements, Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51N0AdUAcitfUY8n6q3OfCbMOIn4tWl7Dki3qbTbhEts7FbQ8sijvvfGQp65Z1JHQZdMBGOuRGTwWjOCXjT4JtsM700DJgaaErP');

const CheckoutForm = ({ clientSecret }: { clientSecret: string }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setErrorMessage(null);

    if (!stripe || !elements) {
      console.error("Stripe or elements are not loaded yet");
      return;
    }

    setIsProcessing(true);

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://www.example.com/payment-success", 
      }
    });

    if (result.error) {
      setErrorMessage(result.error.message || "An unknown error occurred");
      console.error(result.error.message);
    } else {
      console.log("Payment succeeded");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

const Payment = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000, currency: 'usd' }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch client secret');
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error("Error fetching clientSecret", error);
        setError("Failed to initialize payment. Please try again later.");
      });
  }, []);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div>Loading payment form...</div>
      )}
    </>
  );
};

export default Payment;