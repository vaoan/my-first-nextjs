import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

const UserList: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} | <strong>Email:</strong>{" "}
            {user.email}
          </li>
        ))}
      </ul>
      <p>
        <Link href={"."}>Back</Link>
      </p>
    </div>
  );
};

export default UserList;
