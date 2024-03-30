import { forwardRef, useEffect, useState } from "react";
import { fetchdata } from "../libs/cookies";


const Summery = forwardRef((props, ref) => {

  const [data, setData] = useState(null);
  const [duration, setDuration] = useState({});
  const [rates, setRates] = useState({});
  const [chargingCost, setChargingCost] = useState({
    hourly: 0,
    daily: 0,
    weekly: 0,
    total: 0,
  });

  useEffect(() => {
    setData(fetchdata());
  }, []);

  useEffect(() => {
    if (data) {
      setDuration(data[0]?.duration);
      setRates(data[2]?.rates);
    }
  }, [data]);

  useEffect(() => {

    if (data && duration && rates) {
      let h = duration?.hours * rates?.hourly || 0;
      let d = duration?.days * rates?.daily || 0;
      let w = duration?.weeks * rates?.weekly || 0;
      let total = h + d + w;

      if (data.length > 3 && !data[3]) total += 9;
      if (data.length > 4 && !data[4]) total += 15;
      if (data.length > 5 && !data[5]) total += 11.5;

      setChargingCost({
        hourly: h,
        daily: d,
        weekly: w,
        total: total,
      });
    }
  }, [data, duration, rates]);

  return (
    <div className="mx-3 w-2/6" >
      <div className="border-b-2 border-blue-500">
        <p className="font-bold font-mono">Charges Summary</p>
      </div>
      <div className="border border-blue-500 rounded p-3 mt-6 bg-cyan-300" ref={ref}>
        <table className="w-full" >
          <thead className="border-b-2 border-blue-500">
            <tr>
              <th className="text-start">Charge</th>
              <th>Unit</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {duration?.hours > 0 && (
              <tr>
                <td>Hourly</td>
                <td className="text-center">{duration.hours}</td>
                <td className="text-center">${rates?.hourly}</td>
                <td className="text-center">${chargingCost?.hourly}</td>
              </tr>
            )}
            {duration?.days > 0 && (
              <tr>
                <td>Daily</td>
                <td className="text-center">{duration.days}</td>
                <td className="text-center">${rates?.daily}</td>
                <td className="text-center">${chargingCost?.daily}</td>
              </tr>
            )}
            {duration?.weeks > 0 && (
              <tr>
                <td>Weekly</td>
                <td className="text-center">{duration.weeks}</td>
                <td className="text-center">${rates?.weekly}</td>
                <td className="text-center">${chargingCost?.weekly}</td>
              </tr>
            )}
            {data?.length > 3 && !data[3] && (
              <tr>
                <td>Collision Damage Waiver</td>
                <td></td>
                <td className="text-center">$9</td>
                <td className="text-center">$9</td>
              </tr>
            )}
            {data?.length > 4 && !data[4] && (
              <tr>
                <td>Liability Insurance</td>
                <td></td>
                <td className="text-center">$15</td>
                <td className="text-center">$15</td>
              </tr>
            )}
            {data?.length > 5 && !data[5] && (
              <tr>
                <td>Rental Tax</td>
                <td></td>
                <td className="text-center">$11.5</td>
                <td className="text-center">$11.5</td>
              </tr>
            )}
            <tr className="border-t-2 border-blue-300">
              <td className="font-medium">Total</td>
              <td></td>
              <td></td>
              <td className="font-medium text-center">${chargingCost.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

Summery.displayName = 'Summery'

export default Summery;
