import { useGetuserQuery } from "../features/apiSlice";
import { useParams } from "react-router-dom";
import From from "./From";

export default function EditUser() {
  const { userId } = useParams();
  const { data:user, isError, isLoading } = useGetuserQuery(userId);
  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  
  if (!isLoading && isError) {
    content = <div>Loading error message...</div>;
  }
  
  if (!isLoading && !isError && user?.id) {
    content = <From  user={user}/>
  }
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-50">
      <h2 className="mb-4 text-lg font-semibold">Edit User</h2>
     {content}
    </div>
  );
}
