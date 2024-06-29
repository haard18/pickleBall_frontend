import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingComponent = () => {
  const [slots, setSlots] = useState({});
  const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const response = await axios.get('https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/2024-07-01,2024-07-07');
        setSlots(response.data.slots);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    };
    
    fetchSlots();
  }, []);

  const toggleSlotSelection = (day: string, slot: string) => {
    const daySlots = selectedSlots[day] || [];
    if (daySlots.includes(slot)) {
      setSelectedSlots({ ...selectedSlots, [day]: daySlots.filter(s => s !== slot) });
    } else {
      setSelectedSlots({ ...selectedSlots, [day]: [...daySlots, slot] });
    }
  };

  const bookSlots = () => {
    console.log('Booking slots:', selectedSlots);
    // Implement booking logic here
  };

  return (
    <div className="grid grid-cols-7 gap-4">
      {Object.entries(slots).map(([date, slotArray]) => (
        <div key={date} className="border p-4 w">
          <h2 className="font-bold text-lg">{date}</h2>
          {slotArray.map(({ from, to, isBooked }: { from: string, to: string, isBooked: boolean }) => (
            <button
              key={from}
              className={`block w-full text-left my-1 p-2 ${isBooked ? 'bg-red-500 text-white' : selectedSlots[date]?.includes(from) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => !isBooked && toggleSlotSelection(date, from)}
              disabled={isBooked}
            >
              {`${from.split(':')[0]}:${from.split(':')[1]} - ${to.split(':')[0]}:${to.split(':')[1]}`}
            </button>
          ))}
        </div>
      ))}
      <button className="col-span-2 mt-4 bg-green-500 text-white p-2" onClick={bookSlots}>
        Book Selected Slots
      </button>
    </div>
  );
};

export default BookingComponent;
