import BookingCard from "./BookingCard";

const PastBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
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

export default PastBooking;
