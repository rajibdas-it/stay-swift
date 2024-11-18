import { auth } from '@/auth';
import PaymentForm from '@/components/payment/PaymentForm';
import { redirect } from 'next/navigation';
import React from 'react';

const PaymentPage = async ({ params: { id }, searchParams: { checkin, checkout } }) => {
    console.log(checkin);
    const session = await auth()

    if (!session) {
        redirect('/login')
    }
    return (
        <section class="container">

            <div class="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                <h2 class="font-bold text-2xl">Payment Details</h2>
                <p class="text-gray-600 text-sm">You have picked <b>Effotel By Sayaji Jaipur</b> and base price is <b>$10</b>
                </p>
                <PaymentForm checkin={checkin} checkout={checkout} />
            </div>
        </section>
    );
};

export default PaymentPage
    ;