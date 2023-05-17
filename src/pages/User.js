import React,{useState} from 'react'

import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

export default function User() {

    const[data,setData] =useState([]);

    const[edit,setedit] =useState(-1);

    const removeItem =(index)=> {

        let p= [...data];
        p.splice(index,1);
        setData(p);
    }
  return (
    <>
    <UserForm list={data} setlist={setData} edi={edit} setedi={setedit}></UserForm>
    <UserList list={data} remove={removeItem} setedi={setedit}></UserList>
    
    </>
    
  )
}
