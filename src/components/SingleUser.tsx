import { Link, useParams } from "react-router-dom";
import { useGetuserQuery, useDeleteUserMutation } from "../features/apiSlice";

export default function SingleUser() {
  const { userId } = useParams();
  const { data, error, isLoading } = useGetuserQuery(userId);
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      await deleteUser(userId);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">User Details</h2>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>
        Address: {data.address.street}, {data.address.suite},{" "}
        {data.address.city}, {data.address.zipcode}
      </p>

      <Link to={`/users/edit/${userId}`}>
        <p>Edit</p>
      </Link>
      <button onClick={handleDelete} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}
