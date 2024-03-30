
import { useState } from "react";
import { storeData } from "../libs/cookies";

const Charges = () => {
  
  const [waiver,setWaiver] = useState(false);
  const [insurance,setInsurance] = useState(false);
  const [tax,setTax] = useState(false);

  const onChange = (e) => {
    let name = e.target.name;

    if (name === 'waiver') {
      setWaiver(prev => !prev)
      storeData(name,waiver);
    }
    else if (name === 'insurance') {
      setInsurance(prev => !prev)
      storeData(name,insurance);
    }
    else if (name === 'tax') {
      setTax(prev => !prev);
      storeData(name,tax);
    }
  }

  return (
    <div className="ml-3 w-2/6">
      <div className="border-b-2 border-blue-500">
        <p className="font-bold font-mono">
          Additional Charges
        </p>
      </div>
      <div className="border border-blue-400 mt-4 p-3 rounded">
        <div>
          <div className="flex border border-blue-300 py-2 px-2 mb-1 rounded">
            <input type="checkbox" name="waiver" id="waiver" value={waiver} onChange={onChange} />
            <label htmlFor="waiver" className="w-full ml-4 flex justify-between">
              <p className="mr-2">
                Collision Damage Waiver
              </p>
              <p>$9.00</p>
            </label>
          </div>


          <div className=" flex border border-blue-300 py-2 px-2 mb-1 rounded">
            <input type="checkbox" name="insurance" id="insurance" value={insurance} onChange={onChange} />
            <label htmlFor="insurance" className="w-full ml-4 flex justify-between">
              <p className="mr-2">
                Liability Insurance
              </p>
              <p>$15.00</p>
            </label>
          </div>


          <div className="flex border  border-blue-300 py-2 px-2 rounded">
            <input type="checkbox" name="tax" id="tax" value={tax} onChange={onChange} />
            <label htmlFor="tax" className="w-full ml-4 flex justify-between ">
              <p className="mr-2">
                Rental Tax
              </p>
              <p>11.5%</p>
            </label>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Charges;