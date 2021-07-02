import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J8g9FSEDNkjiVAZAKR7SeZ8Lo5NzMeh7nNSGhxg7yChQSGDxFdNt1FUOC5UO3bByLWpsCtKbN7qDc8ROtPog1cY007dEKQMvv";
    
    const onToken = token => {

        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout
        label = "Pay Now"
        name = "Oasis Corp"
        billingAddress
        shippingAddress
        
        description={`Total $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton 

