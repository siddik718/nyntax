
import Input from "./Input";
import DateInput from "./DateInput";

const ReservationDetails = () => {

  return (
    <div className="w-2/6">
      <div className="">
        <div className="border-b-2 border-blue-500 ">
          <p className="font-bold font-mono">
            Reservation Details
          </p>
        </div>
        <div className="border border-blue-400 mt-4 p-3 rounded">
          <Input
            label={"Reservastion ID"}
            readOnly={true}
          />
          <DateInput />
          <Input
            label={"Discount"}
            readOnly={true}
          />
        </div>
      </div>
    </div>
  )
}

export default ReservationDetails;