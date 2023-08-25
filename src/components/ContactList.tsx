import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../index";
import { Link } from "react-router-dom";
import { deteleUser } from "../redux/contactSlice";


function ContactList() {
  const contactListData = useSelector(
    (state: RootState) => state.users.contactList
  );
  const dispatch = useDispatch();
    const handleDelete =(id:number)=>{
      dispatch(deteleUser({id:id}))
    }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Contact List
        </h1>
        <div className="mb-4">
          <Link to="/add">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full w-full hover:bg-green-600 transition duration-300">
              Create New Contact
            </button>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-2">
          {contactListData.map((user) => (
            <div
              key={user.id}
              className="bg-blue-500 p-4 rounded-lg text-white"
            >
              <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
              <p>{user.email}</p>
              <div className="flex mt-3 space-x-2">
                <Link to={`/edit/${user.id}`}>
                  <button className="bg-green-500 text-white px-2 py-1 rounded-full hover:bg-green-600 transition duration-300">
                    Edit
                  </button>
                </Link>
                <button onClick={()=>handleDelete(user.id)} className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition duration-300">
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
