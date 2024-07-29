import  { useState, useEffect } from 'react';
import axios from 'axios';

interface Booking {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  slot: {
    id: string;
    date: string;
    from: string;
    to: string;
    courtId: string;
  };
}

const AdminAllBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://pickleball.haardsolanki-itm.workers.dev/api/booking/getBookings');
        setBookings(response.data.bookings);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching bookings:', err);
        setError('Failed to fetch bookings. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Court</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">From</th>
                <th className="px-4 py-2">To</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{booking.id}</td>
                  <td className="px-4 py-2">{booking.user.name}</td>
                  <td className="px-4 py-2">{booking.user.email}</td>
                  <td className="px-4 py-2">{booking.slot.courtId==="f33e55e9-e9a9-43d6-90ce-c9aa372c684a"?"PickleBall 1":booking.slot.courtId==="7eddd897-15e5-4adf-a4d5-a9776af8f26d"?"PickleBall2":"Turf"}</td>
                  <td className="px-4 py-2">{new Date(booking.slot.date).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{booking.slot.from}</td>
                  <td className="px-4 py-2">{booking.slot.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminAllBookings;
