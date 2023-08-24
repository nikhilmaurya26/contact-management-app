import React from 'react'
import {useSelector} from 'react-redux'
import { RootState } from '../index';
import { Link } from 'react-router-dom';

function ContactList() {

  const contactListData = useSelector((state: RootState) => state.users.contactList);
    console.log(contactListData);
  return (
    <div>
      This is the detail list of the user 
      <Link to="/add"><button className='bg-black border-r-2 text-white'>Create+</button></Link>
      <div>
        This is card 1
        <div>
            <span>
            {contactListData.map((user) => (
                      <tr key={user.id}>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                      </tr>
                  ))}
            </span>
        </div>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default ContactList
