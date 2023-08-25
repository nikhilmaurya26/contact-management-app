import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { updateUser } from "../redux/contactSlice";

function EditContact() {
  const { id } = useParams();
  const contactListData = useSelector(
    (state: RootState) => state.users.contactList
  );
  const exists = id ? contactListData.filter((f) => f.id === parseInt(id)) : [];

  const { name, email } = exists[0] || {};
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedId = id ? parseInt(id) : undefined;
    dispatch(updateUser({ id: parsedId, name: uname, email: uemail })); // Convert id to number
    navigate("/");
  };
  return (
    <div>
      Update
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Update Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Update Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default EditContact;
