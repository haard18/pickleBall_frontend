import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Slot {
  from: string;
  to: string;
  isBooked: boolean;
}

interface SlotsByDate {
  [date: string]: Slot[];
}

interface SelectedSlot {
  date: string;
  from: string;
  to: string;
}

const BookingComponent: React.FC = () => {
  const [slots, setSlots] = useState<SlotsByDate>({});
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed in JavaScript
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const date = new Date();
        const startDate = new Date(date);
        const endDate = new Date(startDate);
        const formattedStartDate = formatDate(startDate);
        endDate.setDate(startDate.getDate() + 7);
        const formattedEndDate = formatDate(endDate);
        const response = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${formattedStartDate},${formattedEndDate}`);
        setSlots(response.data.slots);
      } catch (error) {
        console.error('Error fetching slots:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const toggleSlotSelection = (date: string, from: string, to: string) => {
    const selectedSlot = { date, from, to };
    const index = selectedSlots.findIndex(slot => slot.date === date && slot.from === from && slot.to === to);
    if (index !== -1) {
      setSelectedSlots(selectedSlots.filter(slot => slot.date !== date || slot.from !== from || slot.to !== to));
    } else {
      setSelectedSlots([...selectedSlots, selectedSlot]);
    }
  };

  const bookSlots = async () => {
    //
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          Object.entries(slots).map(([date, slotArray]) => (
            <div key={date} className="border p-4 w">
              <h2 className="font-bold text-lg">{date}</h2>
              {slotArray.map(({ from, to, isBooked }) => (
                <button
                  key={from}
                  className={`block w-full text-left my-1 p-2 ${isBooked ? 'bg-red-500 text-white' : selectedSlots.find(slot => slot.date === date && slot.from === from && slot.to === to) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => !isBooked && toggleSlotSelection(date, from, to)}
                  disabled={isBooked}
                >
                  {`${from.split(':')[0]}:${from.split(':')[1]} - ${to.split(':')[0]}:${to.split(':')[1]}`}
                </button>
              ))}
            </div>
          ))
        )}
      </div>
      {!isLoading &&
        <div className='flex justify-start'>
          <button className="col-span-2 mt-4 bg-green-500 text-white p-2" onClick={bookSlots}>
            Book Selected Slots
          </button>
        </div>}
    </>
  );
};

export default BookingComponent;
