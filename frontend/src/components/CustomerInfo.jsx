import { useEffect, useState } from "react";
import Input from "./Input";
import { storeData } from "../libs/cookies";

const CustomerInfo = () => {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (data.firstname && data.lastname && data.email && data.phone) {
      storeData('CUSTOMER', data);
    }
  }, [data])

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }


  return (
    <div className="ml-3 w-2/6">
      <div className="border-b-2 border-blue-500">
        <p className="font-bold font-mono">
          Customer Information
        </p>
      </div>
      <div className="border border-blue-400 mt-4 p-3 rounded">
        <Input
          label="First Name"
          name="firstname"
          value={data.firstname}
          onChange={onChange}
          required={true}
        />
        <Input
          label="Last Name"
          name="lastname"
          value={data.lastname}
          onChange={onChange}
          required={true}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          value={data.email}
          onChange={onChange}
          required={true}
        />
        <Input
          type="text"
          label="Phone"
          name="phone"
          value={data.phone}
          onChange={onChange}
          required={true}
        />
      </div>
    </div>
  )
}

export default CustomerInfo;