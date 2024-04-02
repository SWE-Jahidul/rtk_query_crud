import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory
import { useAddUserMutation } from "../features/apiSlice";

export default function AddUser() {
  const history = useNavigate(); // Initialize useHistory hook
  const [addUser, { isLoading }] = useAddUserMutation();

  const handleSubmit = async (e:any) => {
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
    try {
      await addUser({ name, email, address });
      // Redirect to /users route after successfully adding a user
      history("/");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  return (
    <div className="p-4 rounded-lg shadow-md bg-gray-50">
      <h2 className="mb-4 text-lg font-semibold">Add User</h2>
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
            className="px-2 py-1 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 px-4 text-white bg-blue-600 rounded"
        >
          {isLoading ? "Adding..." : "Add User"}
        </button>
      </form>
    </div>
  );
}
