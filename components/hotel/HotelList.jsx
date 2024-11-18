import { getAllHotels } from "@/database/quries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkin, checkout }) => {
  const hotels = await getAllHotels(destination, checkin, checkout);
  console.log(hotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            hotelInfo={hotel}
            checkin={checkin}
            checkout={checkout}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
