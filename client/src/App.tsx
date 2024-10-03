import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: string;
  displayName: string;
  mail?: string;
  userPrincipalName?: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get<User[]>('/api/users');
        console.info('result', result.data);
        setUsers(result.data);
      } catch (err) {
        if (err instanceof Error) {
          console.error(`Error fetching data from API: ${err.message}`);
          setError(err.message);
        } else {
          console.error('Unknown error fetching data from API');
          setError('Unknown error occurred');
        }
      }
    }

    fetchData().catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Microsoft Graph Users</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <ul>
          {users.map((user: User) => (
            <li key={user.id}>
              {user.displayName} ({user.mail ?? user.userPrincipalName})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

