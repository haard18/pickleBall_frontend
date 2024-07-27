import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, addDays, startOfToday } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Slot {
  id: string;
  date: string;
  from: string;
  to: string;
  isBooked: boolean;
  courtId: string;
}

const MobileBookingComponent: React.FC = () => {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(startOfToday());
  const [selectedCourt, setSelectedCourt] = useState('court1'); // State for selected court

  const getSlots = async (start: Date, end: Date) => {
    setIsLoading(true);
    try {
      const sport = localStorage.getItem('sport') || 'cricket';
      const formattedStart = format(start, 'yyyy-MM-dd');
      const formattedEnd = format(end, 'yyyy-MM-dd');
      const courtPath = selectedCourt === 'court1' ? 'pickleball1' : 'pickleball2'; // Adjust API endpoint based on selected court

      const response = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${sport === 'cricket' ? 'cricket' : courtPath}/${formattedStart}/${formattedEnd}`);
      setSlots(response.data.slots);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching slots:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSlots(currentDate, addDays(currentDate, 6));
  }, [currentDate, selectedCourt]); // Add selectedCourt to dependency array

  const toggleSlotSelection = (slot: Slot) => {
    setSelectedSlots(prevSelectedSlots => {
      const isSelected = prevSelectedSlots.find(s => s.id === slot.id);
      if (isSelected) {
        return prevSelectedSlots.filter(s => s.id !== slot.id);
      } else {
        return [...prevSelectedSlots, slot];
      }
    });
  };

  const bookSlots = () => {
    console.log('Booking slots:', selectedSlots);
    // Add booking logic here
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setCurrentDate(date);
    }
  };

  const handleCourtChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourt(event.target.value);
  };

  // Filter slots for the current date
  const currentDateString = format(currentDate, 'yyyy-MM-dd');
  const currentDaySlots = slots.filter(slot => format(new Date(slot.date), 'yyyy-MM-dd') === currentDateString);

  // Format date heading as "25 July, 2024"
  const formattedDateHeading = format(currentDate, 'd MMMM, yyyy');

  return (
    <div className="p-4">
      <div className="mb-4">
        <DatePicker
          selected={currentDate}
          onChange={(date: Date | null) => handleDateChange(date)}
          dateFormat="yyyy-MM-dd"
          minDate={startOfToday()} // Set the minimum date to today
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <select
          value={selectedCourt}
          onChange={handleCourtChange}
          className="w-full p-2 border rounded"
        >
          <option value="court1">Court 1</option>
          <option value="court2">Court 2</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div key={currentDateString} className="border rounded-md p-4 w-full">
            <h2 className="font-bold text-lg mb-2">{formattedDateHeading}</h2>
            {currentDaySlots.map(slot => (
              <button
                key={slot.id}
                className={`block rounded-lg w-full btn-primary text-left my-1 p-2 ${slot.isBooked ? 'bg-red-500 text-white' : selectedSlots.find(s => s.id === slot.id) ? 'bg-blue-500 text-black font-semibold' : 'bg-gray-200'}`}
                onClick={() => !slot.isBooked && toggleSlotSelection(slot)}
                disabled={slot.isBooked}
              >
                {`${slot.from} - ${slot.to}`}
              </button>
            ))}
          </div>
        )}
        {!isLoading && selectedSlots.length > 0 && (
          <div className="flex justify-start mt-4">
            <button className="bg-green-500 text-white p-2" onClick={bookSlots}>
              Book Selected Slots
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileBookingComponent;
