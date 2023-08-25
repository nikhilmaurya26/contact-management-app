import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { Link } from "react-router-dom";
import { deteleUser } from "../redux/contactSlice";

function ContactList() {
  const contactListData = useSelector((state: RootState) => state.users.contactList);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deteleUser({ id: id }));
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Contact List</h1>
        <div className="mb-4">
          <Link to="/add">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full w-full hover:bg-green-600 transition duration-300">
              Create New Contact
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactListData.map((user) => (
            <div key={user.id} className="bg-blue-500 p-2 rounded-lg text-white">
              <h2 className="text-base font-semibold mb-1">{user.name}</h2>
              <p className="text-sm">{user.email}</p>
              <div className="flex mt-2 space-x-2">
                <Link to={`/edit/${user.id}`}>
                  <button className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition duration-300 text-xs">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-300 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
