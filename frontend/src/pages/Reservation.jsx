import Button from '../components/Button';
import ReservationDetails from '../components/ReservationDetails';
import CustomerInfo from '../components/CustomerInfo';
import VehicleInfo from '../components/VehicleInfo';
import Charges from '../components/Charges';
import Summery from '../components/Summery';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { fetchdata } from '../libs/cookies';
import axios from 'axios';

const Reservation = () => {

  const summeryRef = useRef(null);

  const handleClick = async () => {
    try{
      const canvas = await html2canvas(summeryRef.current);
      const info = fetchdata();
      if(!info)alert('Please Fill All the fields');
      else {
        const data = {
          email: info[1].email,
          image: canvas.toDataURL(),
        }
        const endpoint = import.meta.env.VITE_SERVER;
        const response = await axios.post(endpoint, data, {
          responseType: 'blob',
        });

        const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
        const pdfUrl = window.URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Reservation_Details.pdf';
        document.body.appendChild(link);

        // Trigger the download
        link.click();

        // Clean up
        document.body.removeChild(link);
        window.URL.revokeObjectURL(pdfUrl);
      }
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className='p-2 my-10 ml-4 mr-20'>

      <div className='p-2 flex justify-between mb-1' >

        <p className='font-mono font-bold text-2xl'>Reservation</p>

        <Button handleClick={handleClick} />
      </div>

      <div className='p-2  flex	mb-1'>
        <ReservationDetails />
        <CustomerInfo />
        <Summery ref={summeryRef} />

      </div>

      <div className='p-2  flex mb-1'>
        <VehicleInfo />
        <Charges />
      </div>
    </div>
  )
}

export default Reservation;