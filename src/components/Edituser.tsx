import { useEditUserMutation,useGetuserQuery } from "../features/apiSlice";
import { useParams } from "react-router-dom";

export default function EditUser() {
  const { userId } = useParams();
  const { data:user } = useGetuserQuery(userId);
  const [editUser, { isLoading }] = useEditUserMutation();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const address = {
      street: formData.get("street"),
      suite: formData.get("suite"),
      city: formData.get("city"),
      zipcode: formData.get("zipcode"),
    };
    editUser({ userId, name, email, address });
    e.target.reset();
  };

  // Check if user object exists before rendering
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-50">
      <h2 className="mb-4 text-lg font-semibold">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            defaultValue={user.name} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            defaultValue={user.email} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="street" className="block">
            Street:
          </label>
          <input
            type="text"
            id="street"
            name="street"
            required
            defaultValue={user.address.street} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="suite" className="block">
            Suite:
          </label>
          <input
            type="text"
            id="suite"
            name="suite"
            required
            defaultValue={user.address.suite} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="city" className="block">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            defaultValue={user.address.city} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="zipcode" className="block">
            Zipcode:
          </label>
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            required
            defaultValue={user.address.zipcode} // Set default value for editing
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 px-4 text-white bg-blue-600 rounded"
        >
          {isLoading ? "Updating..." : "Update User"}
        </button>
      </form>
    </div>
  );
}
