import { useEffect, useState } from "react";
import { storeData } from "../libs/cookies";

const VehicleInfo = () => {
  const [data, setData] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList')
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleTypeChange = (e) => {
    const vehicleData = data.filter(dt => dt.type === e.target.value)
    setVehicle(vehicleData)
  }
  const handleChange = (e) => {
    const r = vehicle.find(vh => vh.model === e.target.value);
    if(r) {
      storeData('VEHICLE',r);
    }
  }

  return (
    <div className="w-2/6">
      <div className="">
        <div>
        <div className="border-b-2 border-blue-500">
          <p className="font-bold font-mono">
            Vehicle Information
          </p>
        </div>
        </div>
        <div className="border border-blue-400 mt-4 p-3 rounded">
          <div className="mb-1">
            <label htmlFor="vehicles">Vehicle Type:</label>
            <br />
            <select name="vehicles" id="vehicles" onChange={handleTypeChange} className="w-full border border-blue-300 rounded p-1">

              {data.length > 0 && data.map(dt => (
                <option value={dt.type} key={dt.id}>{dt.type}</option>
              ))}
            </select>
          </div>
          <div >
            <label htmlFor="vehicle">Vehicle:</label>
            <br />
            <select name="vehicle" id="vehicle" onChange={handleChange} className="w-full border border-blue-300 rounded p-1">
              {vehicle.length > 0 && vehicle.map(dt => (
                <option value={dt.model} key={dt.id}>{dt.model}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleInfo;
