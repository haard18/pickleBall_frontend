import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { format, addDays, subDays, startOfToday } from 'date-fns';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Slot {
  id: string;
  date: string;
  from: string;
  to: string;
  isBooked: boolean;
  courtId: string;
}

const Admin_viewComponent: React.FC = () => {
  const [slots, setSlots] = useState<Record<string, Slot[]>>({});
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(startOfToday());
  const [sport, setSport] = useState('cricket'); // State to track selected sport

  const getSlots = async (start: Date, end: Date) => {
    setIsLoading(true);
    try {
      const formattedStart = format(start, 'yyyy-MM-dd');
      const formattedEnd = format(end, 'yyyy-MM-dd');

      // Determine the endpoint based on the selected sport
      const response = await axios.get(
        `https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${
          sport === 'cricket' ? 'cricket' : sport === 'pickleball2' ? 'pickleball2' : 'pickleball1'
        }/${formattedStart}/${formattedEnd}`
      );

      // Organize the slots by date
      setSlots(
        response.data.slots.reduce((acc: Record<string, Slot[]>, slot: Slot) => {
          const date = new Date(slot.date).toLocaleDateString();
          if (!acc[date]) acc[date] = [];
          acc[date].push(slot);
          return acc;
        }, {})
      );
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching slots:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSlots(startDate, addDays(startDate, 6));
  }, [startDate, sport]); // Re-fetch slots when the sport changes

  const toggleSlotSelection = (slot: Slot) => {
    setSelectedSlots((prevSelectedSlots) => {
      const isSelected = prevSelectedSlots.find((s) => s.id === slot.id);
      if (isSelected) {
        return prevSelectedSlots.filter((s) => s.id !== slot.id);
      } else {
        return [...prevSelectedSlots, slot];
      }
    });
  };

  const bookSlots = () => {
    console.log('Booking slots:', selectedSlots);
    // Add booking logic here
  };

  return (
    <div className="p-4">
      {/* Sport Selection Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={() => setSport('cricket')}
          className={`btn ${sport === 'cricket' ? 'btn-primary' : 'btn-outline'}`}
        >
          Cricket
        </button>
        <button
          onClick={() => setSport('pickleball1')}
          className={`btn ${sport === 'pickleball1' ? 'btn-primary' : 'btn-outline'}`}
        >
          Pickleball 1
        </button>
        <button
          onClick={() => setSport('pickleball2')}
          className={`btn ${sport === 'pickleball2' ? 'btn-primary' : 'btn-outline'}`}
        >
          Pickleball 2
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <button onClick={() => setStartDate(subDays(startDate, 7))} className="btn btn-outline">
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button onClick={() => setStartDate(addDays(startDate, 7))} className="btn btn-outline">
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          Object.entries(slots).map(([date, slotArray]) => (
            <div key={date} className="border rounded-md p-4 w-full">
              <h2 className="font-bold text-lg">{date}</h2>
              {slotArray.map((slot) => (
                <button
                  key={slot.id}
                  className={`block rounded-lg w-full btn-primary text-left my-1 p-2 ${
                    slot.isBooked
                      ? 'bg-red-500 text-white'
                      : selectedSlots.find((s) => s.id === slot.id)
                      ? 'bg-blue-500 text-black font-semibold'
                      : 'bg-gray-200'
                  }`}
                  onClick={() => !slot.isBooked && toggleSlotSelection(slot)}
                  disabled={slot.isBooked}
                >
                  {`${slot.from} - ${slot.to}`}
                </button>
              ))}
            </div>
          ))
        )}
        {!isLoading && selectedSlots.length > 0 && (
          <div className="col-span-7 flex justify-start mt-4">
            <button className="bg-green-500 text-white p-2" onClick={bookSlots}>
              Book Selected Slots
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin_viewComponent;
