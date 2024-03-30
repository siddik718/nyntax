import React from "react"
import PropTypes from "prop-types";

const RootContext = React.createContext();

const initialState = {
    // Customer States
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    // Reservation States
    pickup: null,
    drop: null,
    duration: 0,
    // Vehicle States
    vehicle: {},
    // Charges States
    waiver: false,
    insurance: false,
    tax: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CUSTOMER':
            return {
                ...state,
                firstname: action.payload?.firstname,
                lastname: action.payload?.lastname,
                email: action.payload?.email,
                phone: action.payload?.phone,
            };
        case 'RESERVATION':
            return {
                ...state,
                pickup: action.payload?.pickup,
                drop: action.payload?.drop,
                duration: action.payload?.duration,
            };
        case 'VEHICLE':
            return {
                ...state,
                vehicle: action.payload?.vehicle,
            };
        case 'WAIVER':
            return {
                ...state,
                waiver: !state.waiver,
            };
        case 'INSURANCE':
            return {
                ...state,
                insurance: !state.insurance,
            };
        case 'TAX':
            return {
                ...state,
                tax: !state.tax,
            };
        default:
            return state;
    }
}


export const RootProvider = ({ children }) => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    const value = {
        state,
        dispatch,
    };

    return (
        <RootContext.Provider value={value}>
            {children}
        </RootContext.Provider>
    )
}
RootProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export default RootContext;
