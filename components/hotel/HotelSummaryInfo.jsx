import Ratings from "./Ratings";

const HotelSummaryInfo = ({ fromListPage, info }) => {
  return (
    <>
      <div className={fromListPage ? "flex-1" : "flex-1 container"}>
        <h2
          className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}
        >
          {info.name}
        </h2>
        <p>📍 {info.city}</p>
        <div className="flex gap-2 items-center my-4">
          <Ratings id={info.id} />
          <span>232 Reviews</span>
        </div>
        <div>
          <span className="bg-yellow-300 p-1 rounded-">
            {info.propertyCategory} Star Property
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-end justify-center">
        <h2 className="text-2xl font-bold text-right">
          ${(info?.highRate + info?.lowRate) / 2}/night
        </h2>
        <p className=" text-right">Per Night for 1 Rooms</p>
        {fromListPage ? (
          <button className="btn-primary ">Details</button>
        ) : (
          <button className="btn-primary ">Book</button>
        )}
      </div>
    </>
  );
};

export default HotelSummaryInfo;
