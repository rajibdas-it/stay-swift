import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ info }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" info={info} />
      </div>
    </section>
  );
};

export default Summary;
