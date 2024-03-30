import Cookies from 'js-cookie';

export const storeData = (name,data) => {
    // convert data to JSON.
    const jsonData = JSON.stringify(data);
    Cookies.set(name, jsonData)
}

export const fetchdata = () => {

    let reservation = Cookies.get('RESERVATION');
    let customer = Cookies.get('CUSTOMER');
    let vehicle = Cookies.get('VEHICLE');
    
    let waiver = Cookies.get('waiver');
    let insurance = Cookies.get('insurance');
    let tax = Cookies.get('tax');
    
    let data = [];

    if (!reservation || !customer || !vehicle) {
        return false;
    }

    reservation = JSON.parse(reservation);
    customer = JSON.parse(customer);
    vehicle = JSON.parse(vehicle);

    data.push(reservation);
    data.push(customer);
    data.push(vehicle);

    if(waiver) {
        data.push(JSON.parse(waiver));
    }
    
    if(insurance) {
        data.push(JSON.parse(insurance));
    }

    if(tax) {
        data.push(JSON.parse(tax));
    }

    return data;
}