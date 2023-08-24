import React ,{useState} from "react";
import { addContact } from "../redux/contactSlice";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from '../index';
import { useNavigate } from "react-router-dom";



const ContactForm = () => {

  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const contactListData = useSelector((state: RootState) => state.users.contactList);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dispatching addContact");
    dispatch(addContact({
      id: contactListData[contactListData.length - 1].id + 1,
      name,
      email
    }));
    navigate('/')
  };
  console.log('hi')
  return (
    <div className="flex w-full h-screen justify-center align-middle">
      <div className="w-1/2 border bg-blue-400 text-white p-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={e=>setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={e=>setEmail(e.target.value)}
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
    </div>
  );
};

export default ContactForm;
