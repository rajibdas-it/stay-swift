import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ info, checkin, checkout }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo
          source="details"
          info={info}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
};

export default Summary;
