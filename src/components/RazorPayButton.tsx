import React, { useEffect } from 'react';

const RazorpayButton: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute('data-payment_button_id', 'pl_OY4vM1uCHyPLem');
    script.async = true;

    const form = document.getElementById('razorpay-button-form');
    if (form) {
      form.appendChild(script);
    }

    return () => {
      if (form) {
        form.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="razorpay-button-container">
      <form id="razorpay-button-form">
        {/* The payment button will be inserted here by the script */}
      </form>
    </div>
  );
};

export default RazorpayButton;
