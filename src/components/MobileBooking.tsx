import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

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

const MobileBookingComponent: React.FC = () => {
  const [slots, setSlots] = useState<SlotsByDate>({});
  const [selectedSlots, setSelectedSlots] = useState<SelectedSlot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dates, setDates] = useState<string[]>([]);
  const navigate = useNavigate();

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
        endDate.setDate(startDate.getDate() + 7); // Only fetch 2 days of slots
        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);
        const response = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${formattedStartDate},${formattedEndDate}`);
        setSlots(response.data.slots);
        setDates(Object.keys(response.data.slots));
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
    try {
      await axios.post('https://pickleball.haardsolanki-itm.workers.dev/api/booking/bookSlots', { slots: selectedSlots });
      // Assuming the response will contain the updated slot data
      setSelectedSlots([]);
      const updatedSlots = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${formatDate(new Date())},${formatDate(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000))}`);
      setSlots(updatedSlots.data.slots);
      navigate('/payment')
    } catch (error) {
      console.error('Error booking slots:', error);
    }
  };

  const handlePreviousDate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNextDate = () => {
    if (currentIndex < dates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div key={dates[currentIndex]} className="border p-4 w">

            <div className='flex justify-between items-center gap-4'>

              <button className="btn  btn-outline" onClick={handlePreviousDate}>
                <FontAwesomeIcon icon={faCaretLeft} />
              </button>
              <h2 className="font-bold text-lg">{dates[currentIndex]}</h2>
              <button className="btn btn-outline" onClick={handleNextDate}>
                <FontAwesomeIcon icon={faCaretRight} />
              </button> 
            </div>
            {slots[dates[currentIndex]].map(({ from, to, isBooked }) => (
              <button
                key={from}
                className={`block w-full btn-primary text-center rounded-lg my-1 p-2 ${isBooked ? 'bg-red-500 text-white' : selectedSlots.find(slot => slot.date === dates[currentIndex] && slot.from === from && slot.to === to) ? 'bg-blue-500 text-black font-semibold' : 'bg-gray-200'}`}
                onClick={() => !isBooked && toggleSlotSelection(dates[currentIndex], from, to)}
                disabled={isBooked}
              >
                {`${from.split(':')[0]}:${from.split(':')[1]} - ${to.split(':')[0]}:${to.split(':')[1]}`}
              </button>
            ))}
          </div>

        )}
      </div>

      {!isLoading && selectedSlots.length > 0 && (
        <div className="flex justify-start">
          <button className="col-span-2 mt-4 bg-green-500 text-white p-2" onClick={bookSlots}>
            Book Selected Slots
          </button>
        </div>
      )}
    </>
  );
};

export default MobileBookingComponent;