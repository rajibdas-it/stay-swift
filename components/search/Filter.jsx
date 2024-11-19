import SortHotel from "../sort/SortHotel";
import AmenitiesFilter from "./filter/AmenitiesFilter";
import PriceFilter from "./filter/PriceFilter";
import CategoryFilter from "./filter/CategoryFilter";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <SortHotel />
        <PriceFilter />
        <CategoryFilter />
        <AmenitiesFilter />
      </div>
    </>
  );
};

export default Filter;
