import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/stripe-react-js';
import { Paper, Button, Typography, Alert } from '@mui/material';

function PaymentForm({ amount }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      if (error) {
        setError(error.message);
        setProcessing(false);
        return;
      }

      // Add API call to process payment
      // await processPayment(paymentMethod.id, amount);
      
    } catch (err) {
      setError('Payment failed. Please try again.');
    }
    setProcessing(false);
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>Payment Details</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <form onSubmit={handleSubmit}>
        <CardElement 
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <Button 
          fullWidth 
          variant="contained" 
          type="submit"
          disabled={!stripe || processing}
          sx={{ mt: 2 }}
        >
          Pay KES {amount}
        </Button>
      </form>
    </Paper>
  );
}

export default PaymentForm; 