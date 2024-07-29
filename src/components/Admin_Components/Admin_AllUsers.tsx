import { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
  phoneNo: string;
}

const AdminAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://pickleball.haardsolanki-itm.workers.dev/api/user/getAllUsers');
        console.log('API response:', response);
        if (response.data) {
          setUsers(response.data);
        } else {
          console.error('Unexpected response structure:', response);
        }
      } catch (error) {
        console.error('Failed to fetch users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (isLoading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (!users.length) {
    return <div className="text-center text-gray-500">No users found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t border-gray-200">
              <td className="py-3 px-4">{user.id}</td>
              <td className="py-3 px-4">{user.name}</td>
              <td className="py-3 px-4">{user.email}</td>
              <td className="py-3 px-4">{user.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAllUsers;
