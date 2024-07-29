import axios from 'axios';
import  { useEffect, useState, useCallback } from 'react';
import { format, addDays, subDays, startOfToday, isBefore } from 'date-fns';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RazorpayButton from './RazorPayButton';

interface Slot {
  id: string;
  date: string;
  from: string;
  to: string;
  isBooked: boolean;
  courtId: string;
}

const BookingComponent: React.FC = () => {
  const [slots, setSlots] = useState<Record<string, Slot[]>>({});
  const [selectedSlots, setSelectedSlots] = useState<Slot[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startDate, setStartDate] = useState(startOfToday());
  const [selectedCourt, setSelectedCourt] = useState('court1'); // Add state for selected court
  const [isPaying, setIsPaying] = useState(false);

  const getSlots = useCallback(async (start: Date, end: Date) => {
    setIsLoading(true);
    try {
      const formattedStart = format(start, 'yyyy-MM-dd');
      const formattedEnd = format(end, 'yyyy-MM-dd');
      const sport = localStorage.getItem('sport') || 'cricket';
      const court = sport === 'pickleball' ? selectedCourt : '';
      const courtPath = court ? (court === 'court2' ? 'pickleball2' : 'pickleball1') : 'cricket';
      const response = await axios.get(`https://pickleball.haardsolanki-itm.workers.dev/api/booking/getSlots/${courtPath}/${formattedStart}/${formattedEnd}`);
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
  }, [selectedCourt]);

  useEffect(() => {
    getSlots(startDate, addDays(startDate, 6));
  }, [startDate, selectedCourt, getSlots]); // Include getSlots in dependency array

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
    // console.log('Booking slots:', selectedSlots);
    setIsPaying(true);
  };

  // Check if the current start date is before today
  const isPreviousDisabled = isBefore(startDate, startOfToday());

  const handleCourtChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCourt(event.target.value);
  };

  const sport = localStorage.getItem('sport') || 'cricket';

  return (
    <div className="p-4">
      {sport === 'pickleball' && (
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
      )}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setStartDate(subDays(startDate, 7))}
          className="btn btn-outline"
          disabled={isPreviousDisabled}
        >
          <FontAwesomeIcon icon={faCaretLeft} />
        </button>
        <button
          onClick={() => setStartDate(addDays(startDate, 7))}
          className="btn btn-outline"
        >
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
              {slotArray.map(slot => (
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
          ))
        )}
        {!isLoading && selectedSlots.length > 0 && (
          <div className="col-span-7 flex justify-start mt-4">
            <button className="bg-green-500 text-white p-2" onClick={bookSlots}>
              Book Selected Slots
            </button>
          </div>
        )}
        {isPaying && <RazorpayButton />}
      </div>
    </div>
  );
};

export default BookingComponent;
