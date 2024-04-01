import { useState } from "react";
import { useGetUsersQuery } from "../features/apiSlice";
import User from "./User";
import AddUser from "./Adduser"; // Corrected import

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
      <button
        onClick={() => setIsFormVisible(true)}
        className="w-48 px-10 py-2 text-white bg-slate-600"
      >
        Add New User
      </button>
      {isFormVisible && <AddUser />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {content}
      </div>
    </div>
  );
}
