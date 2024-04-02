import { useState } from "react";
import { useGetUsersQuery } from "../features/apiSlice";
import User from "./User";
import AddUser from "./Adduser"; // Corrected import
import { Link } from "react-router-dom";

export default function Users() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  const [isFormVisible, setIsFormVisible] = useState(false);

  let content = null;
  if (isLoading) {
    content = "loading..";
  }
  if (!isLoading && isError) {
    content = "error..";
  }

  if (!isLoading && !isError && users?.length === 0) {
    content = "length is 0..";
  }

  if (!isLoading && !isError && users?.length > 0) {
    content = users.map((user: any) => <User key={user.id} user={user} />);
  }

  return (
    <div>
      <Link to={`/users/add`}>
        <p>ADD USER</p>
      </Link>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {content}
      </div>
    </div>
  );
}
