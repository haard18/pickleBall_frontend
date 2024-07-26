import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Booking {
  id: string;
  user: {
    name: string;
    email: string;
  };
  sport: string;
  courtId: string;
  date: string;
  from: string;
  to: string;
  status: string;
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
                <th className="px-4 py-2">Sport</th>
                <th className="px-4 py-2">Court</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">From</th>
                <th className="px-4 py-2">To</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{booking.id}</td>
                  <td className="px-4 py-2">{booking.user.name}</td>
                  <td className="px-4 py-2">{booking.user.email}</td>
                  <td className="px-4 py-2">{booking.sport}</td>
                  <td className="px-4 py-2">{booking.courtId}</td>
                  <td className="px-4 py-2">{booking.date}</td>
                  <td className="px-4 py-2">{booking.from}</td>
                  <td className="px-4 py-2">{booking.to}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`py-1 px-2 rounded text-sm ${
                        booking.status === 'Confirmed'
                          ? 'bg-green-500 text-white'
                          : booking.status === 'Pending'
                          ? 'bg-yellow-500 text-black'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
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
