import { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

import { Diff } from '../libs/dates';
import Input from './Input';
import { storeData } from '../libs/cookies';

const DateInput = () => {
    const [pickup, setPickup] = useState(null);
    const [drop, setDrop] = useState(null);
    const [duration, setDuration] = useState({
        output: '',
        stay_duration: {},
    });

    useEffect(() => {
        if (pickup !== null && drop !== null) {
            const data = { 
                pickup: pickup.toLocaleString(),
                drop: drop.toLocaleString(),
                duration: duration.stay_duration, 
            };
            storeData("RESERVATION",data);
        }
    }, [pickup, drop, duration])

    useEffect(() => {
        if (pickup !== null && drop !== null) {
            const durationValue = Diff(drop, pickup);
            setDuration(durationValue);
        }
    }, [pickup, drop]);
    return (
        <div>
            <div>
                <p className='py-1'>
                    Pickup Date<span className="text-red-500">*
                    </span>
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        value={pickup}
                        onChange={(newValue) => setPickup(newValue)}
                        viewRenderers={{
                            hours: renderTimeViewClock,
                            minutes: renderTimeViewClock,
                            seconds: renderTimeViewClock,
                        }}
                        label="Select Date and Time"
                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                    />
                </LocalizationProvider>
            </div>

            <div>
                <p className='py-1'>
                    Return Date<span className="text-red-500">*
                    </span>
                </p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        value={drop}
                        onChange={(newValue) => setDrop(newValue)}
                        viewRenderers={{
                            hours: renderTimeViewClock,
                            minutes: renderTimeViewClock,
                            seconds: renderTimeViewClock,
                        }}
                        label="Select Date and Time"
                        slotProps={{ textField: { size: 'small', fullWidth: true } }}
                    />
                </LocalizationProvider>
            </div>

            <div className='flex justify-between items-center py-2 '>
                <p className='py-1'>
                    Duration
                </p>
                <Input
                    type="text"
                    value={duration.output}
                    readOnly={true}
                />

            </div>
        </div>
    )
}

export default DateInput;