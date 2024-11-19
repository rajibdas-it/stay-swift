import { getAllHotels } from "@/database/quries";
import HotelCard from "./HotelCard";
import NoHotel from "./NoHotel";

const HotelList = async ({ destination, checkin, checkout, category }) => {
  const hotels = await getAllHotels(destination, checkin, checkout, category);
  console.log(hotels);

  return (
    <div className="col-span-9">
      <div className="space-y-4">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotelInfo={hotel}
              checkin={checkin}
              checkout={checkout}
            />
          ))
        ) : (
          <NoHotel />
        )}
      </div>
    </div>
  );
};

export default HotelList;
