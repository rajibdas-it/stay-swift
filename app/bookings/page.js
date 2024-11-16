import PastBooking from '@/components/user/booking/PastBooking';
import UpcomingBooking from '@/components/user/booking/UpcomingBooking';
import ProfileInfo from '@/components/user/ProfileInfo';
import React from 'react';

const BookingsPage = () => {
    return (
        <>
            <section class="mt-[100px]">
                <div class="container">
                    <ProfileInfo />
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <PastBooking />
                        <UpcomingBooking />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookingsPage;