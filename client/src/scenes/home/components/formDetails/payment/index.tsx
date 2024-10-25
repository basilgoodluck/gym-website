import { useEffect, useState } from "react";
import { useStripe, useElements, Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51N0AdUAcitfUY8n6q3OfCbMOIn4tWl7Dki3qbTbhEts7FbQ8sijvvfGQp65Z1JHQZdMBGOuRGTwWjOCXjT4JtsM700DJgaaErP');
const API_URL = process.env.GYM_WEBSITE_API_URL

const CheckoutForm = ({ clientSecret }: { clientSecret: string | null }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
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
    <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
      <PaymentElement />
      <button type="submit" disabled={!stripe || !clientSecret} style={buttonStyle}>
        Submit Payment
      </button>
    </form>
  );
};

const buttonStyle = {
  backgroundColor: "#000",
  color: "#fff",
  fontSize: "16px",
  padding: "6px 10px",
  border: "none",
  width: "100%",
  borderRadius: "4px",
  cursor: "pointer",
  marginTop: "20px",
};

const Payment = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 5000, currency: 'usd' }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching clientSecret", error));
  }, []);

  const options: StripeElementsOptions = {
    clientSecret: clientSecret ?? undefined,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#6772e5',
        colorBackground: '#f8f9fa',
        colorText: '#32325d',
        fontFamily: 'Arial, sans-serif',
        spacingUnit: '2px',
        borderRadius: '4px',
      },
      rules: {
        '.Input': {
          border: '1px solid #ced4da',
          padding: '10px',
        },
        '.Input--invalid': {
          borderColor: '#fa755a',
        },
        '.Tab': {
          padding: '10px',
        },
        '.Tab:hover': {
          backgroundColor: '#e9ecef',
        },
      },
    },
  };

  return (
    <>
      {clientSecret ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      ) : (
        <div>Loading payment...</div>
      )}
    </>
  );
};

export default Payment;
