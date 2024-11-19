import BookingCard from "./BookingCard";

const UpcomingBooking = ({ bookings }) => {
  // {
  //     id: '673c1f29f45fad9cce982244',
  //     hotelId: new ObjectId('66263526f50c2e548501f28a'),
  //     userId: new ObjectId('673990111463f8851b6f405f'),
  //     checkin: '2024-12-08',
  //     checkout: '2024-12-10',
  //     __v: 0
  //   }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">⌛️ Upcomming Bookings</h2>

      {bookings &&
        bookings.length > 0 &&
        bookings.map((booking) => (
          <BookingCard
            key={booking?.id}
            hotelId={booking?.hotelId}
            checkin={booking?.checkin}
            checkout={booking?.checkout}
          />
        ))}
    </div>
  );
};

export default UpcomingBooking;
