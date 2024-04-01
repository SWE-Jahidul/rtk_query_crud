import React from "react";
import { Link } from "react-router-dom";

interface UserProps {
  user: {
    id: number;
    name: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  const { id, name, address } = user;
  const fullAddress = `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Link to={`/users/${id}`}>
       <p className="text-lg font-bold">ID: {id}</p>
      </Link>
     
      <p className="text-lg">Name: {name}</p>
      <p className="text-lg">Address: {fullAddress}</p>
    </div>
  );
};

export default User;
