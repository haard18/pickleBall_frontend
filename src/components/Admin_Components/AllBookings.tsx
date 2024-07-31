import React, { useEffect, useState } from 'react';

interface Booking {
  id: string;
  user: {
    name: string;
    email: string;
  };
  slot: {
    courtId: string;
    date: string;
    from: string;
    to: string;
  };
}

const AdminAllBookings: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch('https://pickleball.haardsolanki-itm.workers.dev/api/booking/getBookings');
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4">
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {bookings.map((booking) => (
            <React.Fragment key={booking.id}>
              <div className="px-4 py-2 border">{booking.id}</div>
              <div className="px-4 py-2 border">{booking.user.name}</div>
              <div className="px-4 py-2 border">{booking.user.email}</div>
              <div className="px-4 py-2 border">
                {booking.slot.courtId === "f33e55e9-e9a9-43d6-90ce-c9aa372c684a"
                  ? "PickleBall 1"
                  : booking.slot.courtId === "7eddd897-15e5-4adf-a4d5-a9776af8f26d"
                  ? "PickleBall 2"
                  : "Turf"}
              </div>
              <div className="px-4 py-2 border">{new Date(booking.slot.date).toLocaleDateString()}</div>
              <div className="px-4 py-2 border">{booking.slot.from}</div>
              <div className="px-4 py-2 border">{booking.slot.to}</div>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAllBookings;