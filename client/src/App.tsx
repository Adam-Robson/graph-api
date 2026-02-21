import { useEffect, useState } from 'react';

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
        const response = await fetch('http://localhost:7891/api/users', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = (await response.json()) as User[];
        console.info('result', JSON.stringify(data, null, 2));
        setUsers(data);
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

    fetchData().catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Microsoft Graph Users</h1>
      <> 
        {error ? (
          <div>Error: {error}</div>
        ) : (
          <pre>{JSON.stringify(users, null, 2)}</pre>
        )}
      </>
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
