import { auth } from '@/auth';
import PaymentForm from '@/components/payment/PaymentForm';
import { getHotelById, getUserByEmail } from '@/database/quries';
import { getDayDifference } from '@/utils/data-utils';
import { redirect } from 'next/navigation';
import React from 'react';

const PaymentPage = async ({ params: { id }, searchParams: { checkin, checkout } }) => {

    const session = await auth()

    if (!session) {
        redirect('/login')
    }

    const loggedInUser = await getUserByEmail(session?.user?.name)
    const hotelInfo = await getHotelById(id, checkin, checkout)
    let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2
    const hasCheckInCheckOut = checkin && checkout
    if (hasCheckInCheckOut) {
        const days = getDayDifference(checkin, checkout)
        cost = cost * days
    }
    return (
        <section class="container">

            <div class="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                <h2 class="font-bold text-2xl">Payment Details</h2>
                <p class="text-gray-600 text-sm">
                    You have picked <b>{hotelInfo?.name}</b> and base price is <b>${cost}</b>{hasCheckInCheckOut && `for ${getDayDifference(checkin, checkout)} days`}
                </p>
                <PaymentForm
                    loggedInUser={loggedInUser}
                    hotelInfo={hotelInfo}
                    checkin={checkin}
                    checkout={checkout} />
            </div>
        </section>
    );
};

export default PaymentPage
    ;